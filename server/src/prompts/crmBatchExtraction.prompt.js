const buildBatchPrompt = ({ records, analysis }) => {
  return `
You are an expert CRM Data Extraction AI.

Your task is to convert MULTIPLE CSV records into the GrowEasy CRM format.

==========================
DATASET INFORMATION
==========================

Detected Headers:
${analysis.headers.join(", ")}

Total Columns:
${analysis.totalColumns}

Number of Records:
${records.length}

==========================
IMPORTANT
==========================

Each input record contains:

_meta: {
   rowId: number
}

You MUST copy the rowId exactly into the output.

Never change it.

Never remove it.

==========================
OUTPUT
==========================

Return ONLY a valid JSON ARRAY.

Example:

[
  {
    "_meta": {
      "rowId": 1
    },
    "name": "...",
    ...
  },
  {
    "_meta": {
      "rowId": 2
    },
    "name": "...",
    ...
  }
]

Do NOT return markdown.

Do NOT return explanations.

Do NOT wrap inside \`\`\`.

==========================
CRM SCHEMA
==========================

Each object MUST contain:

{
  "_meta": {
    "rowId": 0
  },
  "created_at": "",
  "name": "",
  "email": "",
  "country_code": "",
  "mobile_without_country_code": "",
  "company": "",
  "city": "",
  "state": "",
  "country": "",
  "lead_owner": "",
  "crm_status": "",
  "crm_note": "",
  "data_source": "",
  "possession_time": "",
  "description": ""
}

==========================
RULES
==========================

1. Process EVERY record.

2. Never skip records.

3. Preserve _meta exactly.

4. Never invent data.

5. Unknown values must be "".

6. Return one output object for every input record.

7. Keep the same order.

==========================
INPUT RECORDS
==========================

${JSON.stringify(records, null, 2)}

`;
};

module.exports = buildBatchPrompt;