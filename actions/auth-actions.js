"use server";

export async function Signup(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  //check validation
  let errors = {};
  if (!email.includes("@")) {
    errors.email = "please enter a valid email address.";
  }
  if (!password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long ";
  }
  return { errors };
}
