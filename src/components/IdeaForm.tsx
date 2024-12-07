/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

const IdeaForm = () => {
  //<Record<string,string>> is the type of object this useState containes i.e string
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState(""); // For the pitch (Markdown editor)

  const { toast } = useToast();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        // TODO: Image uploader instead of image link
        link: formData.get("link") as string,
        // managing it from useState.Hence, no validation here
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description: "Your Idea has been stored successfully!",
        });
        router.push(`/idea/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  //NEW: useActionState() hook that allows you to update state based on form action
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="idea-card w-[65%] space-y-8">
      <div>
        <label htmlFor="title" className="idea-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="idea-form_input"
          placeholder="Title of your Idea!"
          required
        />
        {errors.title && <p className="idea-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="idea-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="idea-form_textarea"
          placeholder="A self-explanatory description of your Idea."
          required
        />
        {errors.description && <p className="idea-form_error">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="category" className="idea-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="idea-form_input"
          placeholder="Idea Category (AI, Health...)"
          required
        />
        {errors.category && <p className="idea-form_error">{errors.category}</p>}
      </div>
      {/* TODO: Image uploader instead of image link */}
      <div>
        <label htmlFor="link" className="idea-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="idea-form_input"
          required
          placeholder="Idea Image URL"
        />

        {errors.link && <p className="idea-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="idea-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder: "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="idea-form_error">{errors.pitch}</p>}
      </div>

      <Button type="submit" className="idea-form_btn text-white" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Your Idea"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default IdeaForm;
