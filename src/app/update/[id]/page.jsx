const { getSubs } = require("@/lib/api");

async function page({ params }) {
  // TODO
  // get subscriber by id
  const { id } = await params;

  const entry = await getSubsById;

  return <di></di>;
}
export default page;
