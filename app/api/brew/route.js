export async function GET() {
  return Response.json(
    { 
      error: "I'm a teapot", 
      message: "Tea is for vibes, coffee is for nerds.", 
      pot_type: "floral" 
    },
    { 
      status: 418,
      statusText: "I'm a teapot"
     }
  );
}
