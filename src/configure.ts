export const checkEnv = () => {
  const configs = Object.values(config())
  const check = (cfg: any[]) => {
    cfg.forEach((c: any) => {
      if (!c) throw new Error(".env file is not valid. Check src/configure.ts")
      if (typeof c === 'object') check(Object.values(c))
    })
  }

  check(configs)
}

const config = () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

export default config;
