const userSchema = {
  type: "object",
  required: ["email", "password"],

  properties: {
    id: { type: "integer" },
    name: { type: ["string", "null"] },
    email: { type: "string" },
    password: { type: "string" },
    active: { type: "boolean" },
    email_verified: { type: "boolean" },
    email_verified_at: { type: "string" },
    created_at: { type: "string" },
    updated_at: { type: "string" },
  },
};

module.exports = userSchema;
