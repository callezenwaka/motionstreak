import Copy from "@/types/Copy";
import { store } from './store';
import { ActionTypes } from "@/store/actions";

export const handleAddress = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(address.length - 3)}`;
}

export const handleCopy = async (word: string, copy: Copy) => {
  copy.isCopying = true;
  await navigator.clipboard.writeText(word);
  setTimeout(() => {
    copy.isCopying = false;
  }, 5000);
};

export const handleBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;
  target.style.borderColor = target.value
    ? "rgba(229,231,235, 1)"
    : "rgba(255, 0, 0, 1)";
};

export const handleLogout = async () => {
  store.dispatch(ActionTypes.Logout, {title: 'Logout', text: 'Logout successful', status: true})
}