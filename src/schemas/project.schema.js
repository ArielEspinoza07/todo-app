const projectSchema = {
  type: "object",
  required: ["name", "user_id"],

  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    description: { type: ["string", "null"], minLength: 1, maxLength: 255 },
    status: { type: "string", minLength: 1, maxLength: 255 },
    user_id: { type: "integer" },
    created_at: { type: "string" },
    updated_at: { type: "string" },
  },
};

module.exports = projectSchema;
