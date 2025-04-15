"use client";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

function SendMessageForm() {
  // Track the loading state of the form
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  // Track the form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSend = async (e: FormEvent<HTMLFormElement>) => {
    try {
      // Prevent the form from reloading the page when submitted
      e.preventDefault();

      // Show a loading spinner
      setSendingMessage(true);

      // Make a request to the message send endpoint
      const res = await axios.post("/api/message", {name, email, message});

      console.log("Data returned after message sent: ", res.data);

      toast.success("Thanks for contacting us, we'll reply via email in up to 12 hours")
    } catch (e) {
      console.log("An error occured while sending message...");

      // toast.error("We couldn't send your message, but don't fret....you can try again")
    } finally {
      setSendingMessage(false);
    }
  };

  return (
    <section className="section">
      <article className="flex flex-col gap-2 items-center text-center justify-centrer">
        <h2 className="heading">We're always happy to hear from you !</h2>

        <p className="text-slate-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          unde odit eveniet repellat odio voluptates sequi velit, voluptatibus
          maxime laudantium fuga reiciendis natus earum, ad temporibus ex?
          Eveniet, aliquid sunt.
        </p>
      </article>

      {/* Contact us form */}
      <form
        onSubmit={handleMessageSend}
        className="grid sm:grid-cols-2 gap-4 w-full p-6 md:w-fit md:p-0"
        action=""
      >
        <Input
          className="border-2 border-slate-200 md:min-w-[200px] col-span-1"
          placeholder="Enter your name..."
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="border-2 border-slate-200 md:min-w-[200px] col-span-1"
          placeholder="Enter your email address"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          className="sm:col-span-2"
          placeholder="Enter your message here..."
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          disabled={sendingMessage}
          className="sm:col-span-2 items-center"
        >
          {sendingMessage && <Loader2 className="animate-spin" />}
          {sendingMessage ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}

export default SendMessageForm;
