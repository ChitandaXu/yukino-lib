import * as React from 'react';
import { Panel, PrimaryButton } from 'office-ui-fabric-react';
import styles from './MigrationProject.module.scss';

export default function MigrationProject(): JSX.Element {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  function _handleButtonClick(): void {
    setOpen(true);
  }

  return (
    <div className={styles.container}>
      <PrimaryButton text={'CLick me'} onClick={_handleButtonClick} />
      <Panel
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
        onRenderBody={() => <div>Hello I'm Panel body</div>}
        hasCloseButton={true}
      />
      Hello Migration Project
    </div>
  );
}