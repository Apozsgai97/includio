import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const businessTable = pgTable("business", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  address: varchar("address", { length: 255 }).notNull(),
  contact_mobile: varchar("contact_mobile", { length: 255 }).notNull(),
  contact_email: varchar("contact_email", { length: 255 }).notNull().unique(),
  category: varchar("category", { length: 255 }),
  image: varchar("image", { length: 255 }),
});

export const accessibilityIndexTable = pgTable("accessibility_index", {
  id: uuid("id").primaryKey().defaultRandom(),
  businessId: uuid("business_id")
    .notNull()
    .references(() => businessTable.id), 
  ramp: varchar("ramp", { length: 50 }).notNull(),
  doors: varchar("doors", { length: 50 }).notNull(),
  parking: varchar("parking", { length: 50 }).notNull(),
  dimension: varchar("dimension", { length: 50 }).notNull(),
  grabRails: varchar("grab_rails", { length: 50 }).notNull(),
  emergencyButton: varchar("emergency_button", { length: 50 }).notNull(),
  showerBed: varchar("shower_bed", { length: 50 }).notNull(),
  ceilingLift: varchar("ceiling_lift", { length: 50 }).notNull(),
  space: varchar("space", { length: 50 }).notNull(),
  restroomAccess: varchar("restroom_access", { length: 50 }).notNull(),
  insideStairs: varchar("inside_stairs", { length: 50 }).notNull(),
  tables: varchar("tables", { length: 50 }).notNull(),
  dog: varchar("dog", { length: 50 }).notNull(),
  score: integer("score").notNull(),
});