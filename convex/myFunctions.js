import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createTask = mutation({
  args: { text: v.string(),isCompleted:v.boolean() },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("tasks", { text: args.text,isCompleted:args.isCompleted });
    return newTaskId;
  },
});