import React from "react";

export default function CheckOutForm() {
  return (
    <form>
      <div>
        {/*contact and personal info */}
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" placeholder="name" />
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="email" />
        <label htmlFor=""></label>
      </div>
    </form>
  );
}
