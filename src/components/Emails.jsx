import Email from "./Email";

function Emails({ emails, onToggleRead, onToggleStar }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email) => (
          <Email
            key={email.id}
            email={email}
            onToggleRead={onToggleRead}
            onToggleStar={onToggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
