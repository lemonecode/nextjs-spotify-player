import { memo } from "react";
import { PlayerController } from "./PlayerContoller";
import { StateConsumer } from "./StateConsumer";
import styles from "./PlayerContent.module.css";
import { Lyrics } from "./Lyrics";

export const PlayerContent: React.VFC<{ access_token: string }> = memo(
  ({ access_token }) => {
    return (
      <div className={styles.root}>
        <div className={styles.playerButtons}>
          <PlayerController />
        </div>
        <div className={styles.stateConsumer}>
          <Lyrics access_token={access_token} />
          <StateConsumer access_token={access_token} />
        </div>
      </div>
    );
  },
);
PlayerContent.displayName = 'PlayerContent';