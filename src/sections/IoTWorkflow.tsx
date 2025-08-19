// src/sections/IoTWorkflow.tsx
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, useAnimation } from 'motion/react'
import { Thermometer, Activity, Radio } from 'lucide-react'

/** Simple sensor simulator */
function useSensor() {
    const [value, setValue] = useState(24.2)
    useEffect(() => {
        const id = setInterval(() => {
            setValue(v => {
                const delta = (Math.random() - 0.5) * 0.6
                return Math.round((v + delta) * 10) / 10
            })
        }, 1200)
        return () => clearInterval(id)
    }, [])
    return value
}

/** tiny helper for a “last command at …” stamp */
function useNowStamp() {
    const [stamp, setStamp] = useState<string | null>(null)
    const mark = () => setStamp(new Date().toLocaleString())
    return { stamp, mark }
}

/** map temperature (°C) to 0–100% for the mini-gauge */
function tempPercent(t: number, min = 15, max = 40) {
    const p = ((t - min) / (max - min)) * 100
    return Math.max(0, Math.min(100, p))
}

export function IoTWorkflow() {
    const [flow, setFlow] = useState(false)
    const [phase, setPhase] = useState<'idle' | 'sending' | 'device' | 'returning' | 'done'>('idle')

    const sendCtrl = useAnimation()
    const recvCtrl = useAnimation()
    const brokerPulse = useAnimation()

    const sensor = useSensor()
    const { stamp, mark } = useNowStamp()

    // SVG geometry (fixed viewBox so we can animate cx reliably)
    const vb = { w: 420, h: 160 }
    const xStart = 24
    const xEnd = vb.w - 24
    const yCmd = 48   // outbound line (dashboard → device)
    const yTele = 112 // inbound line (device → dashboard)

    useEffect(() => {
        // Idle pulsing ring around broker “node”
        brokerPulse.start({
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.2, 0.8],
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
        })
    }, [brokerPulse])

    const startFlow = async () => {
        if (flow) return
        setFlow(true)
        setPhase('sending')
        mark()

        // Outbound packet: cmd/topic L → R
        await sendCtrl.start({
            cx: xEnd,
            transition: { duration: 0.9, ease: 'easeInOut' }
        })

        setPhase('device')
        await new Promise(r => setTimeout(r, 450))

        // Inbound packet: tele/topic R → L
        setPhase('returning')
        // reset receive circle to right before animating back
        await recvCtrl.set({ cx: xEnd })
        await recvCtrl.start({
            cx: xStart,
            transition: { duration: 0.9, ease: 'easeInOut' }
        })

        setPhase('done')
        await new Promise(r => setTimeout(r, 500))

        // reset visuals
        await sendCtrl.set({ cx: xStart })
        await recvCtrl.set({ cx: xEnd })
        setPhase('idle')
        setFlow(false)
    }

    const phaseColor = {
        idle: 'bg-neutral-700 text-neutral-200',
        sending: 'bg-primary/20 text-white',
        device: 'bg-amber-500/20 text-amber-300',
        returning: 'bg-emerald-500/20 text-emerald-300',
        done: 'bg-emerald-600/20 text-emerald-200'
    }[phase]

    const temp = sensor.toFixed(1)
    const tPerc = tempPercent(Number(temp))

    return (
        <section id="iot" className="container py-20">
            <h2 className="text-2xl font-semibold mb-6">Interactive IoT Workflow</h2>
            <p className="text-neutral-300 max-w-prose mb-6">
                Click the command to see how a dashboard action travels through the MQTT broker to an IoT device and back as telemetry.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left: Dashboard */}
                <div className="card p-5">
                    <h3 className="font-semibold">Dashboard</h3>
                    <p className="text-sm text-neutral-400">Command Interface</p>

                    <div className="mt-4 space-y-4">
                        <Button onClick={startFlow} disabled={flow} className="w-full" size="lg">
                            {flow ? 'Transmitting…' : 'Send Command (LED ON)'}
                        </Button>

                        {/* Status pill + activity icon */}
                        <div className="flex items-center justify-between gap-3">
                            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${phaseColor}`}>
                                <Activity className="size-3" />
                                <span className="capitalize">{phase}</span>
                            </div>
                            <div className="text-xs text-neutral-400">
                                {stamp ? <>Last command: <span className="text-neutral-200">{stamp}</span></> : 'No command sent yet'}
                            </div>
                        </div>

                        {/* Temperature mini gauge */}
                        <div className="rounded-xl border border-neutral-800 p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-neutral-300">
                                    <Thermometer className="size-4" />
                                    <span className="text-sm">Temperature</span>
                                </div>
                                <div className="text-sm font-medium">{temp}°C</div>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                                <div
                                    className="h-full bg-primary"
                                    style={{ width: `${tPerc}%` }}
                                    aria-label="Temperature gauge"
                                />
                            </div>
                            <div className="mt-1 flex justify-between text-[10px] text-neutral-500">
                                <span>15°C</span>
                                <span>40°C</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Communication (MQTT Broker) */}
                <div className="card p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">Communication</h3>
                            <p className="text-sm text-neutral-400">MQTT Broker</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                            <span className="relative flex">
                                {/* pulsing broker heartbeat */}
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-primary/30"
                                    style={{ filter: 'blur(4px)' }}
                                    animate={brokerPulse}
                                />
                                <span className="relative size-3 rounded-full bg-primary" />
                            </span>
                            <span>Connected</span>
                        </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                        {/* Topic legend */}
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-1">
                                <span className="size-2 rounded-full bg-primary" />
                                <span className="text-neutral-300">cmd/topic</span>
                                <span className="text-neutral-500">dashboard → device</span>
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-1">
                                <span className="size-2 rounded-full bg-emerald-500" />
                                <span className="text-neutral-300">tele/topic</span>
                                <span className="text-neutral-500">device → dashboard</span>
                            </span>
                        </div>

                        {/* Animated bus */}
                        <div className="relative">
                            <svg viewBox={`0 0 ${vb.w} ${vb.h}`} className="w-full h-40">
                                {/* Outbound line (cmd) */}
                                <line x1={xStart} y1={yCmd} x2={xEnd} y2={yCmd} stroke="currentColor" className="text-neutral-800" strokeWidth="2" />
                                {/* Inbound line (telemetry) */}
                                <line x1={xEnd} y1={yTele} x2={xStart} y2={yTele} stroke="currentColor" className="text-neutral-800" strokeWidth="2" />

                                {/* Broker node (center) */}
                                <g transform={`translate(${vb.w / 2 - 28}, ${vb.h / 2 - 22})`} className='mt-2'>
                                    <rect width="56" height="44" rx="10" className="fill-neutral-950 stroke-neutral-800" strokeWidth="2" />
                                    <Radio className="text-primary" width="20" height="20" x="18" y="12" />
                                </g>

                                {/* Outbound packet (cmd) */}
                                <motion.circle
                                    r="6"
                                    cy={yCmd}
                                    cx={xStart}
                                    className="fill-amber-500"
                                    animate={sendCtrl}
                                />
                                {/* Inbound packet (tele) */}
                                <motion.circle
                                    r="6"
                                    cy={yTele}
                                    cx={xEnd}
                                    className="fill-emerald-500"
                                    animate={recvCtrl}
                                />

                                {/* tiny tick marks to imply data flow */}
                                {Array.from({ length: 12 }).map((_, i) => {
                                    const gap = (xEnd - xStart) / 12
                                    const x = xStart + i * gap
                                    return (
                                        <g key={i}>
                                            <rect x={x} y={yCmd - 1} width="8" height="2" className="fill-neutral-700" />
                                            <rect x={xEnd - i * gap} y={yTele - 1} width="8" height="2" className="fill-neutral-700" />
                                        </g>
                                    )
                                })}
                            </svg>

                            {/* phase helper text */}
                            <div className="absolute -bottom-2 left-0 right-0 translate-y-full text-center text-[11px] text-neutral-500">
                                {phase === 'sending' && 'Sending command on cmd/topic…'}
                                {phase === 'device' && 'Device processing command…'}
                                {phase === 'returning' && 'Receiving telemetry on tele/topic…'}
                                {phase === 'done' && 'Round-trip complete.'}
                                {phase === 'idle' && 'Idle.'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Device */}
                <div className="card p-5">
                    <h3 className="font-semibold">IoT Device</h3>
                    <p className="text-sm text-neutral-400">Response</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="rounded-xl border border-neutral-800 p-4">
                            <div className="text-xs text-neutral-400">LED</div>
                            <div className="mt-2 flex items-center gap-2">
                                <span className={`size-3 rounded-full ${flow || phase === 'done' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                <span className="text-sm">{flow || phase === 'done' ? 'ON' : 'OFF'}</span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-neutral-800 p-4">
                            <div className="text-xs text-neutral-400">Temp</div>
                            <div className="mt-2 text-lg">{temp}°C</div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-xs text-neutral-500 mt-3">This is a visual simulation — no real broker or device is connected here.</p>
            {/* Actions */}
            <div className="mt-4 flex gap-3">
                <Button onClick={startFlow} disabled={flow}>
                    Trigger Again
                </Button>
                <Button
                    onClick={() => {
                        // quick reset if you want to break/try mid-animation
                        sendCtrl.set({ cx: xStart })
                        recvCtrl.set({ cx: xEnd })
                        setPhase('idle')
                        setFlow(false)
                    }}
                >
                    Reset
                </Button>
            </div>
        </section>
    )
}
