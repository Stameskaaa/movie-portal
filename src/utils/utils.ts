import { UserState } from '../types/apiTypes';

export const getUserList = () => {
  const userListString = localStorage.getItem('userList');
  if (userListString) {
    const userList: UserState[] = JSON.parse(userListString);
    return userList;
  } else {
    return null;
  }
};

export const getCurrentUser = () => {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
};

export const foundUser = (name: string) => {
  const userList = getUserList();
  if (userList) {
    const foundUser = userList.find((user: UserState) => user.name === name);
    return foundUser;
  } else {
    return null;
  }
};

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const setUserInLocalStorage = (user: UserState) => {
  localStorage.setItem('currentUser', JSON.stringify(user.name));
};

export const regUserInStorage = (user: UserState) => {
  localStorage.setItem('currentUser', JSON.stringify(user.name));
  const userList = getUserList();
  if (userList) {
    localStorage.setItem('userList', JSON.stringify([...userList, user]));
  } else {
    localStorage.setItem('userList', JSON.stringify([user]));
  }
};

const changeFavoriteList = (user: UserState, id: string, state: boolean) => {
  const userList = getUserList();
  if (state) {
    user.favorites.push(id);
  } else {
    user.favorites = user.favorites.filter((filterId) => id !== filterId);
  }
  const changedUserList = userList?.map((mappedUser) =>
    mappedUser.name === user.name ? user : mappedUser,
  );
  userList && localStorage.setItem('userList', JSON.stringify(changedUserList));
};

export const addFavorite = (name: string, id: string) => {
  const currentUser = foundUser(name);

  if (currentUser) {
    const containsId = hasId('', id, currentUser);
    if (containsId) {
      changeFavoriteList(currentUser, id, false);
      return false;
    } else {
      changeFavoriteList(currentUser, id, true);
      return true;
    }
  }
  // return false;
};

export const hasId = (name: string, id: string, user?: UserState) => {
  const found = user || foundUser(name);
  return found ? user?.favorites.findIndex((valueIndex) => valueIndex === id) !== -1 : false;
};

//checkFavorite
