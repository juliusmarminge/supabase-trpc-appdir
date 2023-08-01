import { procedure, router } from "./init";

export default router({
  me: procedure.query((opts) => {
    return opts.ctx.session?.user;
  }),
});
