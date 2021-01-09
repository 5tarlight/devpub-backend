export type RegisterParam = {
  email: string,
  displayedName: string,
  password: string,
}

export type User = {
  id: string,
  email: string,
  displayedName: string,
}

export type UserRes = {
  data: {
    id: string,
    email: string,
    displayedName: string,
  }
}

export type LoginParam = {
  email: string,
  password: string,
}

export type LoginRes = {
  success: boolean,
  user: User,
}
