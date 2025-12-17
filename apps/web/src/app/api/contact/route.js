import { sendEmail } from "../utils/send-email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validazione
    if (!name || !email || !message) {
      return Response.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 },
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Email non valida" }, { status: 400 });
    }

    // Invia email tramite Resend
    try {
      await sendEmail({
        from: "onboarding@resend.dev", // Cambia con il tuo dominio verificato
        to: "info@037tecnologia.it", // Email dove ricevere i messaggi
        subject: `Nuovo contatto da ${name}`,
        html: `
          <h2>Nuovo messaggio di contatto</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || "Non fornito"}</p>
          <h3>Messaggio:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        text: `Nuovo contatto da ${name}\n\nEmail: ${email}\nTelefono: ${phone || "Non fornito"}\n\nMessaggio:\n${message}`,
      });

      return Response.json(
        {
          success: true,
          message: "Messaggio inviato con successo",
        },
        { status: 200 },
      );
    } catch (emailError) {
      console.error("Errore invio email:", emailError);
      // Se manca la API key di Resend, restituisci un messaggio specifico
      if (emailError.message?.includes("API key")) {
        return Response.json(
          {
            error:
              "Configura RESEND_API_KEY nelle variabili d'ambiente per abilitare l'invio email",
          },
          { status: 500 },
        );
      }
      throw emailError;
    }
  } catch (error) {
    console.error("Errore nel processare la richiesta di contatto:", error);
    return Response.json(
      { error: "Errore durante l'invio del messaggio" },
      { status: 500 },
    );
  }
}
