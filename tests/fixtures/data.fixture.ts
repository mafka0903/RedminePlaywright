import { faker } from "@faker-js/faker";

let passwd = faker.internet.password();
export const testUsers = {
  UserFullData: {
    userlogin: "annaK2025",
    password: "annak2025",
    confirmation: "annak2025",
    firstname: "Анна",
    lastname: "Косач",
    email: "mafka0903@gmail.com",
  },
  UserWithoutEmail: {
    userlogin: faker.person.jobTitle(),
    password: passwd,
    confirmation: passwd,
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
  },
};

export const messages = {
  EmailHasAlready: "Email has already been taken",
  successfulUpdate: "Обліковий запис успішно оновлений.",
  myPageTitle: "Моя сторінка - Redmine",
};

export const urls = {
  myPage: "https://www.redmine.org/my/page",
};
