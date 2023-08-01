import { trpc } from "@/lib/trpc";

export default async function ServerComponent() {
  const viewer = await trpc.me.query();

  if (!viewer) return <p>no sesh from trpc</p>;

  return <p>Hello {viewer.email}</p>;
}
