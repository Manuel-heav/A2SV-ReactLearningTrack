import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const schema = z.object({
  name: z.string().min(1, "Username can't be empty"),
  email: z.string().min(3, "Email is required").email("Email is not valid"),
  message: z.string().min(1, "Message can't be empty"),
});

const ContactForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="block bg-transparent border border-purplish outline-none rounded-xl mb-3 mt-3 px-5 py-2 w-[300px] text-sm text-white"
            type="text"
            placeholder="Enter your name here..."
            {...register("name")}
          />
          <p className="text-[#FF7F7F] text-sm text-center">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="block bg-transparent border border-purplish outline-none rounded-xl mb-3 mt-3 px-5 py-2 w-[300px] text-sm text-white"
            type="text"
            placeholder="Enter your Email here..."
            {...register("email")}
          />
          <p className="text-[#FF7F7F] text-sm text-center">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="block bg-transparent border border-purplish outline-none rounded-xl mb-3 mt-3 px-5 py-2 w-[300px] text-sm text-white"
            placeholder="Enter your message here..."
            {...register("message")}
            
          />
          <p className="text-[#FF7F7F] text-sm text-center">
            {errors.message?.message}
          </p>
        </div>

        <button className="bg-purplish text-white w-[100%] rounded-full p-2 transition hover:scale-105 mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
