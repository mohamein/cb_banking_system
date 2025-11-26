import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <div className="w-full">
        <label htmlFor="email">Email:</label>
        <Input name="email" type="email" placeholder="place your email here." />
      </div>
      <div className="w-full">
        <label htmlFor="password">Password:</label>
        <Input
          name="password"
          type="password"
          placeholder="place your password here."
        />
      </div>

      <Button className="cursor-pointer font-bold">Submit</Button>
    </form>
  );
};

export default LoginForm;
