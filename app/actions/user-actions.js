"use server";

import { revalidatePath } from "next/cache";
import { User } from "@/lib/models/user";
import db from "@/utils/dbconnection";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const fetchFilteredUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 100;

  try {
    await db.connect();
    const count = await User.find({ email: { $regex: regex } }).count();
    const users = await User.find({ email: { $regex: regex } })
      .sort({ last_name: 1, first_name: 1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    await db.disconnect();
    return { users, count};
  } catch (err) {
    return({error: "Failed to fetch users!"});
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    db();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export async function createUser(formData) {
  try {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const password = formData.get("password");
    const isAdmin = formData.get("isadmin");
    const isActive = formData.get("isactive");

    await db.connect();
    const userexists = await User.findOne({ email: email });

    if (userexists) {
      //throw new Error("User with this email account already exists.");
      return { error: "User with this email account already exists." };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin,
      isActive: isActive,
    });

    await newUser.save();
    await db.disconnect();
  } catch (err) {
    //console.log(err);
    return { error: "Failed to insert new user!" };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function deleteUser(id) {
  try {
    await db.connect();
    await User.findByIdAndDelete(id);
    await db.disconnect();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/dashboard/users");
}
