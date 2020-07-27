import {useState, useEffect} from 'react';
import {useApps} from '@aragon/connect-react';
import {CuratedList} from 'connect-thegraph-curated-list';

const useMembers = () => {
  const [apps] = useApps();
  const [members, setMembers] = useState(null);

  useEffect(() => {
    if (apps.length === 0) return;

    const {address} = apps.find(app => app.appName.includes('list.open'));

    const getMembers = async () => {
      const curatedList = await new CuratedList(
        address,
        'https://api.thegraph.com/subgraphs/name/mauerv/aragon-registry-rinkeby-staging'
      );
      const members = await curatedList.members();
      setMembers(members);
    };

    getMembers();
  }, [apps]);

  return members;
};

export default useMembers;
