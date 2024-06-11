//I HAVE CREATED BY USING JAVASCRIPT, NODE.JS, EXPRESS AND SOCKET.IO. I HAVE CREATED ALL TABLES.

//user registration

http://localhost:3000/api/register
request type : POST

insert in to body
{
    "userId": "unique_user_id",
    "deviceId": "device_id",
    "name": "User Name",
    "phone": "1234567890",
    "availCoins": 100,
    "password": "password"
}


#user login

http://localhost:3000/api/login
request type : POST 

insert in to body
{
    "phone": "1234567890",
    "password": "password"
}

it give a JWT_Token copy the token



#chat room creation
http://localhost:3000/api/chatrooms
request type : POST

go to the Headers tab and add a new header:
Authorization with the value Bearer YOUR_JWT_TOKEN 
(replace YOUR_JWT_TOKEN with the token you received from the login response)

{
    "roomId": "unique_room_id",
    "createdBy": 1,
    "maxCapacity": 6
}
response indicating that the chat room is created successfully


#join chatroom
http://localhost:3000/api/joinroom
request type : POST

Go to the Headers tab and add a new header: Authorization with the value Bearer YOUR_JWT_TOKEN

{
    "roomId": "unique_room_id"
}

 response indicating that you have successfully joined the room.

 
#Test Profile Viewing 
http://localhost:3000/api/profile/

request type : GET.

URL: http://localhost:3000/api/profile/1 (replace 1 with the actual user ID)

Headers tab and add a new header: Authorization with the value Bearer YOUR_JWT_TOKEN.

 response receive the user's profile details.

 
 #Sending Friend Requests 
 http://localhost:3000/api/friend-request

request type : POST

URL: http://localhost:3000/api/friend-requests

Headers tab and add a new header: Authorization with the value Bearer YOUR_JWT_TOKEN


//SCREEN SHOTS
![Capture](https://github.com/vamsiKrishna-511/leadmint-assignment/assets/116443206/eda84878-a33b-4aeb-a578-ab6ae7b1e33b)

![Capture2](https://github.com/vamsiKrishna-511/leadmint-assignment/assets/116443206/332acdc7-510d-4d7f-9eed-1b91170e4ae2)





Enter JSON data
{
    "receiverId": 2
}

response indicating that the friend request has been sent successfully.
