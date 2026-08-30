type ContactFormProps = { email: string };

export function ContactForm({ email }: ContactFormProps) {
  return (
    <form
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      className="flex flex-col gap-4 max-w-lg"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="nome" className="font-semibold">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="rounded-lg border-2 border-black/20 px-4 py-3 text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border-2 border-black/20 px-4 py-3 text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="mensagem" className="font-semibold">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="rounded-lg border-2 border-black/20 px-4 py-3 text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
        />
      </div>

      <button
        type="submit"
        className="self-start rounded-lg bg-brand-blue px-6 py-3 text-lg font-semibold text-white hover:bg-[#0f4d8c] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
