import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { inputText } = await req.json();

  if (!inputText) {
    return new Response(JSON.stringify({ error: 'Please provide a input' }), { status: 400 });
  }

  const prompt = `Give some information on ${inputText} in 200 words.`;
  console.log(process.env.OPENAI_API_KEY); // Debugging line

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const output = response.choices[0].message.content;
    return new Response(JSON.stringify({ output }), { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Error generating output' }), { status: 500 });
  }
}