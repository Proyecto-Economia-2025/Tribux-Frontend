import React, { useState } from 'react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const contactMsg = `Hola, soy ${name || '[Nombre]'}${business ? ', ' + business : ''} desde ${city || ''}. ${message || 'Me interesa más información sobre TribuFácil.'} Tel: ${phone || ''}`;

    // 1) Open WhatsApp in a new tab
    const waPhone = '50685456150';
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(contactMsg)}`;
    window.open(waUrl, '_blank');

    // 2) Try to send to CRM API endpoint (needs backend or accessible EspoCRM API)
    try {
      // Replace /api/crm/create with your proxy or EspoCRM API endpoint.
      // If you run EspoCRM at C:\xamppv2\htdocs\espo-crm, expose an API route for CORS or run a small server to forward requests.
      await fetch('/api/crm/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, city, phone, message: contactMsg }),
      });
    } catch (err) {
      // ignore: server might not exist in development
      console.warn('CRM request failed', err);
    }

    // 3) Email fallback
    const mailTo = `mailto:tribufacil@example.com?subject=${encodeURIComponent('Contacto TribuFácil')}&body=${encodeURIComponent(contactMsg)}`;
    window.location.href = mailTo;

    setSubmitting(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6">
        <h3 className="text-xl font-bold mb-2">Solicitar contacto</h3>
        <p className="text-sm text-muted-foreground mb-4">Completa algunos datos y te contactamos por WhatsApp y email.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full rounded border px-3 py-2" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full rounded border px-3 py-2" placeholder="Nombre del negocio" value={business} onChange={(e) => setBusiness(e.target.value)} />
          <input className="w-full rounded border px-3 py-2" placeholder="Ciudad / Cantón" value={city} onChange={(e) => setCity(e.target.value)} />
          <input className="w-full rounded border px-3 py-2" placeholder="Tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <textarea className="w-full rounded border px-3 py-2" placeholder="Mensaje (opcional)" value={message} onChange={(e) => setMessage(e.target.value)} />

          <div className="flex gap-2 justify-end">
            <button type="button" className="rounded border px-4 py-2" onClick={onClose}>Cancelar</button>
            <ShimmerButton type="submit" className="px-6 text-black" shimmerColor="#000000ff">{submitting ? 'Enviando...' : 'Enviar y Contactar'}</ShimmerButton>
          </div>
        </form>
      </div>
    </div>
  );
}
