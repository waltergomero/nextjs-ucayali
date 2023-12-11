"use server";

import { revalidatePath } from "next/cache";
import {  User } from "@/lib/models/user";
import  db  from "@/utils/dbconnection";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";


export const fetchFilteredUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 2;
  
    try {
      await db.connect();
        const count = await User.find({ email: { $regex: regex } }).count();
        const users = await User.find({ email: { $regex: regex } })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
      await db.disconnect();
      return { users };
    } catch (err) {
      console.log(err);
      //throw new Error("Failed to fetch users!");
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

  export async function createUser(dataForm) {
    try {
      await db.connect();
      //await User.findByIdAndDelete(id);
      await db.disconnect();

    } catch (err) {
      console.log(err);
      throw new Error("Failed to insert new user!");
    }
    revalidatePath("/dashboard/users");
  };

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
  };
