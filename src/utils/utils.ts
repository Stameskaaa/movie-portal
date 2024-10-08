import { UserList, UserFavorite, CurrentUser } from '../types/apiTypes';

// NEW NEW

export function loginUser(name: string, password: string) {
  localStorage.setItem('currentUser', JSON.stringify({ name, password }));
}

export function getCurrentUser(): CurrentUser | null {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
}

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export function foundUserInUserList(name: string) {
  const userList = getUserList();
  if (userList) {
    const foundUser = userList.find((userObj: UserFavorite) => userObj.name === name);
    return foundUser;
  }

  return null;
}

export function getUserList() {
  const userListString = localStorage.getItem('userList');
  if (userListString) {
    const userList: UserList = JSON.parse(userListString);
    return userList;
  } else {
    return null;
  }
}

export function regInUserList(name: string, pass: string) {
  const userAlreadyReg = foundUserInUserList(name); // на всякий еще раз проверка почему нет

  if (!userAlreadyReg) {
    const userList = getUserList();
    const newUser = { name, favorites: [] };

    if (userList) {
      localStorage.setItem('userList', JSON.stringify([...userList, newUser]));
    } else {
      localStorage.setItem('userList', JSON.stringify([newUser]));
    }
    loginUser(name, pass);
  }
  return null;
}

export function hasInFavorite(name: string, id: string) {
  const userData = foundUserInUserList(name);
  if (userData) {
    return userData.favorites.findIndex((innerId) => innerId === id) !== -1 ? false : true;
  }
  return false;
}

export function changeFavoriteList(name: string, id: string, state: boolean) {
  const userList = getUserList();
  const userData = foundUserInUserList(name);

  if (userList && !hasInFavorite(name, id) && userData) {
    if (state) {
      userData.favorites.push(id);
    } else {
      userData.favorites = userData.favorites.filter((filterId) => id !== filterId);
    }
    const changedUserList = userList?.map((mappedUser) =>
      mappedUser.name === name ? userData : mappedUser,
    );
    localStorage.setItem('userList', JSON.stringify(changedUserList));
  }
}

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
