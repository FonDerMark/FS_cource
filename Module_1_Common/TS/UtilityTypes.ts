// Собственный тип данных - Пользователь
type CustomUserType = {
    name: string;
    email: string;
};

type UserList = Record<string, CustomUserType>;