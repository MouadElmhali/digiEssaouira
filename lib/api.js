import axios from "axios";

export const sendContactForm = async (data) =>
  fetch("/api/contactus", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const sendAskQuestionForm = async (data) =>
  fetch("/api/askQuestion", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const sendShareUsForm = async (data) => {
  try {
    await axios({
      method: 'post',
      url: "/api/shareus", 
      data: data, 
      headers: {
        'Content-Type': `multipart/form-data`,
      }      
    })
  } catch (error) {
      throw new Error("Failed to send message");
  }

};


export const addAssociation = async (data) => {
  try {
    await axios({
      method: 'post',
      url: "/api/addAssociation", 
      data: data, 
      headers: {
        'Content-Type': `multipart/form-data`,
      }      
    })
  } catch (error) {
      throw new Error("Failed to send message");
  }

  };



