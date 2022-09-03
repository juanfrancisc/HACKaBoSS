import Entry from "./Entry";
import Message from "./Message";
import Spinner from "./Spinner";

const EntryList = (props) => {
  const { entries, loading, errorMessage } = props;

  return (
    <>
      <Spinner loading={loading} />
      <Message msg={errorMessage} type="error" />

      {entries.length > 0 && (
        <ul>
          {entries.map((entryObject) => {
            const { body, id, title, userId } = entryObject;

            return (
              <li key={id}>
                <Entry title={title} body={body} userId={userId} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default EntryList;