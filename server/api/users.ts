export default defineEventHandler(async () => {
  const db = useDb();

  return db.query.users.findMany();
});
