import { ChangeEvent, useEffect, useState } from "react";
import { AdminUsersList } from "../cmps/admin-users-list";
import { ChatRoomsList } from "../cmps/chatRooms-list";
import { ModalSave } from "../cmps/modal-save-user";
import { MiniChatRoom } from "../models/chat-room.model";
import { User } from "../models/user.model";
import { chatRoomService } from "../services/chat-room.service";
import { cloudinaryService } from "../services/cloudinary.service";
import { userService } from "../services/user.service";

export const Admin = () => {
  const [users, setUsers] = useState([] as User[]);
  const [chatRooms, setChatRooms] = useState([] as MiniChatRoom[]);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [userToSave, setUserToSave] = useState({} as User);
  const [isSignup, setIsSignup] = useState(false);
  

  useEffect(() => {
    loadUsers();
    loadChatRooms();
  }, []);
  const loadUsers = async () => {
    const users = (await userService.getUsers()) as User[];
    setUsers(users);
  };

  const loadChatRooms = async () => {
    const chatRooms = await chatRoomService.query();
    setChatRooms(chatRooms);
  };

  const onRemove = async (userId: string) => {
    try {
      const deletedUser = await userService.remove(userId);
      loadChatRooms();
      loadUsers();
    } catch (error) {
      console.error("can not delete this user");
    }
  };

  const onOpenModal = (user: User) => {
    setIsModalOpen(true);
    setUserToSave(user);
  };
  const handleImgUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const src = await cloudinaryService.uploadImg(event);
      setUserToSave((prevCred) => ({
        ...prevCred,
        imgUrl: src,
      }));
    } catch {
      console.log("could not upload image");
    }
  };
  const onAdd = () => {
    const credentials = {
      fullName: "",
      username: "",
      password: "",
      imgUrl:
        "https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png",
    };
    setUserToSave(credentials as User);
    setIsSignup(true)
    setIsModalOpen(true);
  };
  const onSaveUser = async () => {
    if (userToSave._id) {
      const updatedUser = await userService.updateAll(userToSave);
    } else {
      const savedUser = await userService.addUser(userToSave);
    }
    setIsModalOpen(false);
    setIsSignup(false)
    loadChatRooms();
    loadUsers();
  };
  return (
    <div className="admin-page-container">
      {IsModalOpen && (
        <ModalSave
          setIsModalOpen={setIsModalOpen}
          userToSave={userToSave}
          handleImgUpload={handleImgUpload}
          setUserToSave={setUserToSave}
          onSaveUser={onSaveUser}
          isSignup={isSignup}
          setIsSignup={setIsSignup}
        />
      )}
      <h1>Hello administrator</h1>
      <h1>Users and friends:</h1>
      <div className="bttn-container">
        <button onClick={onAdd}>Create</button>
      </div>
      <AdminUsersList
        users={users}
        onRemove={onRemove}
        onOpenModal={onOpenModal}
      />
      <h1>Chat rooms</h1>
      <h3>
        Chat rooms are the documents which contain users chat history. When
        admin delete user his chat room deleted as well
      </h3>
      <ChatRoomsList chatRooms={chatRooms} />
    </div>
  );
};
