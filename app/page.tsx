'use client'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState<string[]>(['Welcome to the chat!'])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, `You: ${input}`])
    setInput('')
  }

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h1>Dogfood Chat 0502</h1>
      <p>Real-time chat — Next.js + WebSocket</p>
      <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minHeight: 200, marginBottom: 16 }}>
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Send
        </button>
      </div>
      <p style={{ color: '#888', fontSize: 12, marginTop: 16 }}>Status: Online</p>
    </main>
  )
}
