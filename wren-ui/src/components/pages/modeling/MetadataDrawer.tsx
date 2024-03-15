import { Drawer } from 'antd';
import { NODE_TYPE } from '@/utils/enum';
import { DrawerAction } from '@/hooks/useDrawerAction';
import ModelMetadata, {
  Props as ModelMetadataProps,
} from './metadata/ModelMetadata';
import MetricMetadata, {
  Props as MetricMetadataProps,
} from './metadata/MetricMetadata';
import ViewMetadata, {
  Props as ViewMetadataProps,
} from './metadata/ViewMetadata';

type Metadata = { nodeType: NODE_TYPE } & ModelMetadataProps &
  MetricMetadataProps &
  ViewMetadataProps;

type Props = DrawerAction<Metadata>;

export default function MetadataDrawer(props: Props) {
  const { visible, defaultValue, onClose } = props;
  const { referenceName, nodeType = NODE_TYPE.MODEL } = defaultValue || {};

  return (
    <Drawer
      visible={visible}
      title={referenceName}
      width={760}
      closable
      destroyOnClose
      onClose={onClose}
    >
      {nodeType === NODE_TYPE.MODEL && <ModelMetadata {...defaultValue} />}
      {nodeType === NODE_TYPE.METRIC && <MetricMetadata {...defaultValue} />}
      {nodeType === NODE_TYPE.VIEW && <ViewMetadata {...defaultValue} />}
    </Drawer>
  );
}