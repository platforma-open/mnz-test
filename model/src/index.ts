import { BlockModel, InferOutputsType } from '@platforma-sdk/model';

export type BlockArgs = {
  name?: string;
};

export const model = BlockModel.create<BlockArgs>()

  .initialArgs({})

  .output('tengoMessage', (ctx) => ctx.outputs?.resolve('tengoMessage')?.getDataAsJson())

  .sections([{ type: 'link', href: '/', label: 'Main' }])

  .done();

export type BlockOutputs = InferOutputsType<typeof model>;
