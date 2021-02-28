import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  Json: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Artifact = {
  __typename?: 'Artifact';
  etag: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  modelset?: Maybe<Modelset>;
  organization?: Maybe<Organization>;
  owner: User;
  path: Scalars['String'];
};

export type ArtifactCreateNestedManyWithoutModelsetInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutModelsetInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutModelsetInput>>;
};

export type ArtifactCreateNestedManyWithoutOrganizationInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOrganizationInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutOrganizationInput>>;
};

export type ArtifactCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutOwnerInput>>;
};

export type ArtifactCreateNestedOneWithoutModelInput = {
  connect?: Maybe<ArtifactWhereUniqueInput>;
  connectOrCreate?: Maybe<ArtifactCreateOrConnectWithoutModelInput>;
  create?: Maybe<ArtifactCreateWithoutModelInput>;
};

export type ArtifactCreateOrConnectWithoutModelInput = {
  create: ArtifactCreateWithoutModelInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactCreateOrConnectWithoutModelsetInput = {
  create: ArtifactCreateWithoutModelsetInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactCreateOrConnectWithoutOrganizationInput = {
  create: ArtifactCreateWithoutOrganizationInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactCreateOrConnectWithoutOwnerInput = {
  create: ArtifactCreateWithoutOwnerInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactCreateWithoutModelInput = {
  etag: Scalars['String'];
  fileName: Scalars['String'];
  modelset?: Maybe<ModelsetCreateNestedOneWithoutArtifactsInput>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutArtifactsInput>;
  path: Scalars['String'];
};

export type ArtifactCreateWithoutModelsetInput = {
  etag: Scalars['String'];
  fileName: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutArtifactsInput>;
  path: Scalars['String'];
};

export type ArtifactCreateWithoutOrganizationInput = {
  etag: Scalars['String'];
  fileName: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutArtifactsInput>;
  path: Scalars['String'];
};

export type ArtifactCreateWithoutOwnerInput = {
  etag: Scalars['String'];
  fileName: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutArtifactsInput>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutArtifactsInput>;
  path: Scalars['String'];
};

export type ArtifactListRelationFilter = {
  every?: Maybe<ArtifactWhereInput>;
  none?: Maybe<ArtifactWhereInput>;
  some?: Maybe<ArtifactWhereInput>;
};

export type ArtifactOrderByInput = {
  etag?: Maybe<SortOrder>;
  fileName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  modelset?: Maybe<ModelsetOrderByInput>;
  organization?: Maybe<OrganizationOrderByInput>;
  organizationId?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  setId?: Maybe<SortOrder>;
};

export type ArtifactScalarWhereInput = {
  AND?: Maybe<Array<ArtifactScalarWhereInput>>;
  NOT?: Maybe<Array<ArtifactScalarWhereInput>>;
  OR?: Maybe<Array<ArtifactScalarWhereInput>>;
  etag?: Maybe<StringFilter>;
  fileName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntFilter>;
  path?: Maybe<StringFilter>;
  setId?: Maybe<IntNullableFilter>;
};

export type ArtifactUpdateManyMutationInput = {
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  fileName?: Maybe<StringFieldUpdateOperationsInput>;
  path?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtifactUpdateManyWithWhereWithoutModelsetInput = {
  data: ArtifactUpdateManyMutationInput;
  where: ArtifactScalarWhereInput;
};

export type ArtifactUpdateManyWithWhereWithoutOrganizationInput = {
  data: ArtifactUpdateManyMutationInput;
  where: ArtifactScalarWhereInput;
};

export type ArtifactUpdateManyWithWhereWithoutOwnerInput = {
  data: ArtifactUpdateManyMutationInput;
  where: ArtifactScalarWhereInput;
};

export type ArtifactUpdateManyWithoutModelsetInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutModelsetInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutModelsetInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutModelsetInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutModelsetInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutModelsetInput>>;
};

export type ArtifactUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOrganizationInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type ArtifactUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ArtifactCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ArtifactUpdateOneRequiredWithoutModelInput = {
  connect?: Maybe<ArtifactWhereUniqueInput>;
  connectOrCreate?: Maybe<ArtifactCreateOrConnectWithoutModelInput>;
  create?: Maybe<ArtifactCreateWithoutModelInput>;
  update?: Maybe<ArtifactUpdateWithoutModelInput>;
  upsert?: Maybe<ArtifactUpsertWithoutModelInput>;
};

export type ArtifactUpdateWithWhereUniqueWithoutModelsetInput = {
  data: ArtifactUpdateWithoutModelsetInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: ArtifactUpdateWithoutOrganizationInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ArtifactUpdateWithoutOwnerInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpdateWithoutModelInput = {
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  fileName?: Maybe<StringFieldUpdateOperationsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutArtifactsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutArtifactsInput>;
  path?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtifactUpdateWithoutModelsetInput = {
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  fileName?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutArtifactsInput>;
  path?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtifactUpdateWithoutOrganizationInput = {
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  fileName?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutArtifactsInput>;
  path?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtifactUpdateWithoutOwnerInput = {
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  fileName?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutArtifactsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutArtifactsInput>;
  path?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtifactUpsertWithWhereUniqueWithoutModelsetInput = {
  create: ArtifactCreateWithoutModelsetInput;
  update: ArtifactUpdateWithoutModelsetInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: ArtifactCreateWithoutOrganizationInput;
  update: ArtifactUpdateWithoutOrganizationInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ArtifactCreateWithoutOwnerInput;
  update: ArtifactUpdateWithoutOwnerInput;
  where: ArtifactWhereUniqueInput;
};

export type ArtifactUpsertWithoutModelInput = {
  create: ArtifactCreateWithoutModelInput;
  update: ArtifactUpdateWithoutModelInput;
};

export type ArtifactWhereInput = {
  AND?: Maybe<Array<ArtifactWhereInput>>;
  NOT?: Maybe<Array<ArtifactWhereInput>>;
  OR?: Maybe<Array<ArtifactWhereInput>>;
  etag?: Maybe<StringFilter>;
  fileName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  model?: Maybe<ModelWhereInput>;
  modelset?: Maybe<ModelsetWhereInput>;
  organization?: Maybe<OrganizationWhereInput>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntFilter>;
  path?: Maybe<StringFilter>;
  setId?: Maybe<IntNullableFilter>;
};

export type ArtifactWhereUniqueInput = {
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type ClassificationMetric = {
  __typename?: 'ClassificationMetric';
  f1?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  npv?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  prevalence?: Maybe<Scalars['Float']>;
  recall?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  specificity?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricCreateNestedOneWithoutModelInput = {
  connect?: Maybe<ClassificationMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<ClassificationMetricCreateOrConnectWithoutModelInput>;
  create?: Maybe<ClassificationMetricCreateWithoutModelInput>;
};

export type ClassificationMetricCreateOrConnectWithoutModelInput = {
  create: ClassificationMetricCreateWithoutModelInput;
  where: ClassificationMetricWhereUniqueInput;
};

export type ClassificationMetricCreateWithoutModelInput = {
  accuracy?: Maybe<Scalars['Float']>;
  f1?: Maybe<Scalars['Float']>;
  npv?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  prevalence?: Maybe<Scalars['Float']>;
  recall?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  specificity?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricOrderByInput = {
  accuracy?: Maybe<SortOrder>;
  f1?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  modelId?: Maybe<SortOrder>;
  npv?: Maybe<SortOrder>;
  ppv?: Maybe<SortOrder>;
  precision?: Maybe<SortOrder>;
  prevalence?: Maybe<SortOrder>;
  recall?: Maybe<SortOrder>;
  sensitivity?: Maybe<SortOrder>;
  specificity?: Maybe<SortOrder>;
  supplementary?: Maybe<SortOrder>;
};

export type ClassificationMetricUpdateOneWithoutModelInput = {
  connect?: Maybe<ClassificationMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<ClassificationMetricCreateOrConnectWithoutModelInput>;
  create?: Maybe<ClassificationMetricCreateWithoutModelInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClassificationMetricUpdateWithoutModelInput>;
  upsert?: Maybe<ClassificationMetricUpsertWithoutModelInput>;
};

export type ClassificationMetricUpdateWithoutModelInput = {
  accuracy?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  f1?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  npv?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  ppv?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precision?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  prevalence?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  recall?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  sensitivity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  specificity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricUpsertWithoutModelInput = {
  create: ClassificationMetricCreateWithoutModelInput;
  update: ClassificationMetricUpdateWithoutModelInput;
};

export type ClassificationMetricWhereInput = {
  AND?: Maybe<Array<ClassificationMetricWhereInput>>;
  NOT?: Maybe<Array<ClassificationMetricWhereInput>>;
  OR?: Maybe<Array<ClassificationMetricWhereInput>>;
  accuracy?: Maybe<FloatNullableFilter>;
  f1?: Maybe<FloatNullableFilter>;
  id?: Maybe<IntFilter>;
  model?: Maybe<ModelWhereInput>;
  modelId?: Maybe<IntFilter>;
  npv?: Maybe<FloatNullableFilter>;
  ppv?: Maybe<FloatNullableFilter>;
  precision?: Maybe<FloatNullableFilter>;
  prevalence?: Maybe<FloatNullableFilter>;
  recall?: Maybe<FloatNullableFilter>;
  sensitivity?: Maybe<FloatNullableFilter>;
  specificity?: Maybe<FloatNullableFilter>;
  supplementary?: Maybe<JsonNullableFilter>;
};

export type ClassificationMetricWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Descriptor = {
  __typename?: 'Descriptor';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
  models: Array<Model>;
  name: Scalars['String'];
  owner?: Maybe<User>;
};


export type DescriptorModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DescriptorModelsOrderByInput>>;
  where?: Maybe<DescriptorModelsWhereInput>;
};

export type DescriptorCreateInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutDescriptorInput>;
  name: Scalars['String'];
};

export type DescriptorCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<DescriptorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DescriptorCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<DescriptorCreateWithoutOwnerInput>>;
};

export type DescriptorCreateNestedOneWithoutModelsInput = {
  connect?: Maybe<DescriptorWhereUniqueInput>;
  connectOrCreate?: Maybe<DescriptorCreateOrConnectWithoutModelsInput>;
  create?: Maybe<DescriptorCreateWithoutModelsInput>;
};

export type DescriptorCreateOrConnectWithoutModelsInput = {
  create: DescriptorCreateWithoutModelsInput;
  where: DescriptorWhereUniqueInput;
};

export type DescriptorCreateOrConnectWithoutOwnerInput = {
  create: DescriptorCreateWithoutOwnerInput;
  where: DescriptorWhereUniqueInput;
};

export type DescriptorCreateWithoutModelsInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DescriptorCreateWithoutOwnerInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutDescriptorInput>;
  name: Scalars['String'];
};

export type DescriptorListRelationFilter = {
  every?: Maybe<DescriptorWhereInput>;
  none?: Maybe<DescriptorWhereInput>;
  some?: Maybe<DescriptorWhereInput>;
};

export type DescriptorModelsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DescriptorModelsWhereInput = {
  keywords?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type DescriptorOrderByInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type DescriptorScalarWhereInput = {
  AND?: Maybe<Array<DescriptorScalarWhereInput>>;
  NOT?: Maybe<Array<DescriptorScalarWhereInput>>;
  OR?: Maybe<Array<DescriptorScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type DescriptorUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutDescriptorInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DescriptorUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DescriptorUpdateManyWithWhereWithoutOwnerInput = {
  data: DescriptorUpdateManyMutationInput;
  where: DescriptorScalarWhereInput;
};

export type DescriptorUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<DescriptorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DescriptorCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<DescriptorCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<DescriptorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<DescriptorScalarWhereInput>>;
  disconnect?: Maybe<Array<DescriptorWhereUniqueInput>>;
  set?: Maybe<Array<DescriptorWhereUniqueInput>>;
  update?: Maybe<Array<DescriptorUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DescriptorUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<DescriptorUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type DescriptorUpdateOneWithoutModelsInput = {
  connect?: Maybe<DescriptorWhereUniqueInput>;
  connectOrCreate?: Maybe<DescriptorCreateOrConnectWithoutModelsInput>;
  create?: Maybe<DescriptorCreateWithoutModelsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DescriptorUpdateWithoutModelsInput>;
  upsert?: Maybe<DescriptorUpsertWithoutModelsInput>;
};

export type DescriptorUpdateWithWhereUniqueWithoutOwnerInput = {
  data: DescriptorUpdateWithoutOwnerInput;
  where: DescriptorWhereUniqueInput;
};

export type DescriptorUpdateWithoutModelsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DescriptorUpdateWithoutOwnerInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutDescriptorInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DescriptorUpsertWithWhereUniqueWithoutOwnerInput = {
  create: DescriptorCreateWithoutOwnerInput;
  update: DescriptorUpdateWithoutOwnerInput;
  where: DescriptorWhereUniqueInput;
};

export type DescriptorUpsertWithoutModelsInput = {
  create: DescriptorCreateWithoutModelsInput;
  update: DescriptorUpdateWithoutModelsInput;
};

export type DescriptorWhereInput = {
  AND?: Maybe<Array<DescriptorWhereInput>>;
  NOT?: Maybe<Array<DescriptorWhereInput>>;
  OR?: Maybe<Array<DescriptorWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  models?: Maybe<ModelListRelationFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type DescriptorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};



export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type Method = {
  __typename?: 'Method';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
  models: Array<Model>;
  name: Scalars['String'];
  owner?: Maybe<User>;
};


export type MethodModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<MethodModelsOrderByInput>>;
  where?: Maybe<MethodModelsWhereInput>;
};

export type MethodCreateInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutMethodInput>;
  name: Scalars['String'];
};

export type MethodCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<MethodWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MethodCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<MethodCreateWithoutOwnerInput>>;
};

export type MethodCreateNestedOneWithoutModelsInput = {
  connect?: Maybe<MethodWhereUniqueInput>;
  connectOrCreate?: Maybe<MethodCreateOrConnectWithoutModelsInput>;
  create?: Maybe<MethodCreateWithoutModelsInput>;
};

export type MethodCreateOrConnectWithoutModelsInput = {
  create: MethodCreateWithoutModelsInput;
  where: MethodWhereUniqueInput;
};

export type MethodCreateOrConnectWithoutOwnerInput = {
  create: MethodCreateWithoutOwnerInput;
  where: MethodWhereUniqueInput;
};

export type MethodCreateWithoutModelsInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MethodCreateWithoutOwnerInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutMethodInput>;
  name: Scalars['String'];
};

export type MethodListRelationFilter = {
  every?: Maybe<MethodWhereInput>;
  none?: Maybe<MethodWhereInput>;
  some?: Maybe<MethodWhereInput>;
};

export type MethodModelsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type MethodModelsWhereInput = {
  keywords?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type MethodOrderByInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type MethodScalarWhereInput = {
  AND?: Maybe<Array<MethodScalarWhereInput>>;
  NOT?: Maybe<Array<MethodScalarWhereInput>>;
  OR?: Maybe<Array<MethodScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type MethodUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutMethodInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MethodUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MethodUpdateManyWithWhereWithoutOwnerInput = {
  data: MethodUpdateManyMutationInput;
  where: MethodScalarWhereInput;
};

export type MethodUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<MethodWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MethodCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<MethodCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<MethodWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MethodScalarWhereInput>>;
  disconnect?: Maybe<Array<MethodWhereUniqueInput>>;
  set?: Maybe<Array<MethodWhereUniqueInput>>;
  update?: Maybe<Array<MethodUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<MethodUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<MethodUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type MethodUpdateOneWithoutModelsInput = {
  connect?: Maybe<MethodWhereUniqueInput>;
  connectOrCreate?: Maybe<MethodCreateOrConnectWithoutModelsInput>;
  create?: Maybe<MethodCreateWithoutModelsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MethodUpdateWithoutModelsInput>;
  upsert?: Maybe<MethodUpsertWithoutModelsInput>;
};

export type MethodUpdateWithWhereUniqueWithoutOwnerInput = {
  data: MethodUpdateWithoutOwnerInput;
  where: MethodWhereUniqueInput;
};

export type MethodUpdateWithoutModelsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MethodUpdateWithoutOwnerInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutMethodInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MethodUpsertWithWhereUniqueWithoutOwnerInput = {
  create: MethodCreateWithoutOwnerInput;
  update: MethodUpdateWithoutOwnerInput;
  where: MethodWhereUniqueInput;
};

export type MethodUpsertWithoutModelsInput = {
  create: MethodCreateWithoutModelsInput;
  update: MethodUpdateWithoutModelsInput;
};

export type MethodWhereInput = {
  AND?: Maybe<Array<MethodWhereInput>>;
  NOT?: Maybe<Array<MethodWhereInput>>;
  OR?: Maybe<Array<MethodWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  models?: Maybe<ModelListRelationFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type MethodWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Metric = ClassificationMetric | RegressionMetric;

export type Model = {
  __typename?: 'Model';
  artifact: Artifact;
  createdAt: Scalars['DateTime'];
  deprecated: Scalars['Boolean'];
  /** name of descriptor */
  descriptor?: Maybe<Scalars['String']>;
  download?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** keywords split by comma or white space */
  keywords?: Maybe<Scalars['String']>;
  /** name of method */
  method?: Maybe<Scalars['String']>;
  metrics?: Maybe<Metric>;
  /** name of modelset */
  modelset?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  /** name of property */
  property?: Maybe<Scalars['String']>;
  succeed: Scalars['Boolean'];
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt: Scalars['DateTime'];
};

export type ModelCreateNestedManyWithoutDescriptorInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutDescriptorInput>>;
  create?: Maybe<Array<ModelCreateWithoutDescriptorInput>>;
};

export type ModelCreateNestedManyWithoutMethodInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutMethodInput>>;
  create?: Maybe<Array<ModelCreateWithoutMethodInput>>;
};

export type ModelCreateNestedManyWithoutModelsetInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutModelsetInput>>;
  create?: Maybe<Array<ModelCreateWithoutModelsetInput>>;
};

export type ModelCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModelCreateWithoutOwnerInput>>;
};

export type ModelCreateNestedManyWithoutPropertyInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutPropertyInput>>;
  create?: Maybe<Array<ModelCreateWithoutPropertyInput>>;
};

export type ModelCreateNestedOneWithoutArtifactInput = {
  connect?: Maybe<ModelWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelCreateOrConnectWithoutArtifactInput>;
  create?: Maybe<ModelCreateWithoutArtifactInput>;
};

export type ModelCreateOrConnectWithoutArtifactInput = {
  create: ModelCreateWithoutArtifactInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutDescriptorInput = {
  create: ModelCreateWithoutDescriptorInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutMethodInput = {
  create: ModelCreateWithoutMethodInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutModelsetInput = {
  create: ModelCreateWithoutModelsetInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutOwnerInput = {
  create: ModelCreateWithoutOwnerInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutPropertyInput = {
  create: ModelCreateWithoutPropertyInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateWithoutArtifactInput = {
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelCreateWithoutDescriptorInput = {
  artifact: ArtifactCreateNestedOneWithoutModelInput;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelCreateWithoutMethodInput = {
  artifact: ArtifactCreateNestedOneWithoutModelInput;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelCreateWithoutModelsetInput = {
  artifact: ArtifactCreateNestedOneWithoutModelInput;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelCreateWithoutOwnerInput = {
  artifact: ArtifactCreateNestedOneWithoutModelInput;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelCreateWithoutPropertyInput = {
  artifact: ArtifactCreateNestedOneWithoutModelInput;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  download?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModelListRelationFilter = {
  every?: Maybe<ModelWhereInput>;
  none?: Maybe<ModelWhereInput>;
  some?: Maybe<ModelWhereInput>;
};

export type ModelOrderByInput = {
  artifact?: Maybe<ArtifactOrderByInput>;
  artifactId?: Maybe<SortOrder>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  createdAt?: Maybe<SortOrder>;
  deprecated?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  descriptorId?: Maybe<SortOrder>;
  download?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  method?: Maybe<MethodOrderByInput>;
  methodId?: Maybe<SortOrder>;
  modelset?: Maybe<ModelsetOrderByInput>;
  ownerId?: Maybe<SortOrder>;
  property?: Maybe<PropertyOrderByInput>;
  propertyId?: Maybe<SortOrder>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
  setId?: Maybe<SortOrder>;
  succeed?: Maybe<SortOrder>;
  trainingEnv?: Maybe<SortOrder>;
  trainingInfo?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ModelScalarWhereInput = {
  AND?: Maybe<Array<ModelScalarWhereInput>>;
  NOT?: Maybe<Array<ModelScalarWhereInput>>;
  OR?: Maybe<Array<ModelScalarWhereInput>>;
  artifactId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deprecated?: Maybe<BoolFilter>;
  descriptorId?: Maybe<IntNullableFilter>;
  download?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableFilter>;
  methodId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  propertyId?: Maybe<IntNullableFilter>;
  setId?: Maybe<IntNullableFilter>;
  succeed?: Maybe<BoolFilter>;
  trainingEnv?: Maybe<JsonNullableFilter>;
  trainingInfo?: Maybe<JsonNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ModelUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateManyWithWhereWithoutDescriptorInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithWhereWithoutMethodInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithWhereWithoutModelsetInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithWhereWithoutOwnerInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithWhereWithoutPropertyInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithoutDescriptorInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutDescriptorInput>>;
  create?: Maybe<Array<ModelCreateWithoutDescriptorInput>>;
  delete?: Maybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelWhereUniqueInput>>;
  set?: Maybe<Array<ModelWhereUniqueInput>>;
  update?: Maybe<Array<ModelUpdateWithWhereUniqueWithoutDescriptorInput>>;
  updateMany?: Maybe<Array<ModelUpdateManyWithWhereWithoutDescriptorInput>>;
  upsert?: Maybe<Array<ModelUpsertWithWhereUniqueWithoutDescriptorInput>>;
};

export type ModelUpdateManyWithoutMethodInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutMethodInput>>;
  create?: Maybe<Array<ModelCreateWithoutMethodInput>>;
  delete?: Maybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelWhereUniqueInput>>;
  set?: Maybe<Array<ModelWhereUniqueInput>>;
  update?: Maybe<Array<ModelUpdateWithWhereUniqueWithoutMethodInput>>;
  updateMany?: Maybe<Array<ModelUpdateManyWithWhereWithoutMethodInput>>;
  upsert?: Maybe<Array<ModelUpsertWithWhereUniqueWithoutMethodInput>>;
};

export type ModelUpdateManyWithoutModelsetInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutModelsetInput>>;
  create?: Maybe<Array<ModelCreateWithoutModelsetInput>>;
  delete?: Maybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelWhereUniqueInput>>;
  set?: Maybe<Array<ModelWhereUniqueInput>>;
  update?: Maybe<Array<ModelUpdateWithWhereUniqueWithoutModelsetInput>>;
  updateMany?: Maybe<Array<ModelUpdateManyWithWhereWithoutModelsetInput>>;
  upsert?: Maybe<Array<ModelUpsertWithWhereUniqueWithoutModelsetInput>>;
};

export type ModelUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModelCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelWhereUniqueInput>>;
  set?: Maybe<Array<ModelWhereUniqueInput>>;
  update?: Maybe<Array<ModelUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ModelUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ModelUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ModelUpdateManyWithoutPropertyInput = {
  connect?: Maybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelCreateOrConnectWithoutPropertyInput>>;
  create?: Maybe<Array<ModelCreateWithoutPropertyInput>>;
  delete?: Maybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelWhereUniqueInput>>;
  set?: Maybe<Array<ModelWhereUniqueInput>>;
  update?: Maybe<Array<ModelUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: Maybe<Array<ModelUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: Maybe<Array<ModelUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type ModelUpdateOneWithoutArtifactInput = {
  connect?: Maybe<ModelWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelCreateOrConnectWithoutArtifactInput>;
  create?: Maybe<ModelCreateWithoutArtifactInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelUpdateWithoutArtifactInput>;
  upsert?: Maybe<ModelUpsertWithoutArtifactInput>;
};

export type ModelUpdateWithWhereUniqueWithoutDescriptorInput = {
  data: ModelUpdateWithoutDescriptorInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithWhereUniqueWithoutMethodInput = {
  data: ModelUpdateWithoutMethodInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithWhereUniqueWithoutModelsetInput = {
  data: ModelUpdateWithoutModelsetInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ModelUpdateWithoutOwnerInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithWhereUniqueWithoutPropertyInput = {
  data: ModelUpdateWithoutPropertyInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithoutArtifactInput = {
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateWithoutDescriptorInput = {
  artifact?: Maybe<ArtifactUpdateOneRequiredWithoutModelInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateWithoutMethodInput = {
  artifact?: Maybe<ArtifactUpdateOneRequiredWithoutModelInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateWithoutModelsetInput = {
  artifact?: Maybe<ArtifactUpdateOneRequiredWithoutModelInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateWithoutOwnerInput = {
  artifact?: Maybe<ArtifactUpdateOneRequiredWithoutModelInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateWithoutPropertyInput = {
  artifact?: Maybe<ArtifactUpdateOneRequiredWithoutModelInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  download?: Maybe<NullableIntFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpsertWithWhereUniqueWithoutDescriptorInput = {
  create: ModelCreateWithoutDescriptorInput;
  update: ModelUpdateWithoutDescriptorInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithWhereUniqueWithoutMethodInput = {
  create: ModelCreateWithoutMethodInput;
  update: ModelUpdateWithoutMethodInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithWhereUniqueWithoutModelsetInput = {
  create: ModelCreateWithoutModelsetInput;
  update: ModelUpdateWithoutModelsetInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ModelCreateWithoutOwnerInput;
  update: ModelUpdateWithoutOwnerInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithWhereUniqueWithoutPropertyInput = {
  create: ModelCreateWithoutPropertyInput;
  update: ModelUpdateWithoutPropertyInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithoutArtifactInput = {
  create: ModelCreateWithoutArtifactInput;
  update: ModelUpdateWithoutArtifactInput;
};

export type ModelWhereInput = {
  AND?: Maybe<Array<ModelWhereInput>>;
  NOT?: Maybe<Array<ModelWhereInput>>;
  OR?: Maybe<Array<ModelWhereInput>>;
  artifact?: Maybe<ArtifactWhereInput>;
  artifactId?: Maybe<IntFilter>;
  clsMetric?: Maybe<ClassificationMetricWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  deprecated?: Maybe<BoolFilter>;
  descriptor?: Maybe<DescriptorWhereInput>;
  descriptorId?: Maybe<IntNullableFilter>;
  download?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableFilter>;
  method?: Maybe<MethodWhereInput>;
  methodId?: Maybe<IntNullableFilter>;
  modelset?: Maybe<ModelsetWhereInput>;
  ownerId?: Maybe<IntNullableFilter>;
  property?: Maybe<PropertyWhereInput>;
  propertyId?: Maybe<IntNullableFilter>;
  regMetric?: Maybe<RegressionMetricWhereInput>;
  setId?: Maybe<IntNullableFilter>;
  succeed?: Maybe<BoolFilter>;
  trainingEnv?: Maybe<JsonNullableFilter>;
  trainingInfo?: Maybe<JsonNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ModelWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Modelset = {
  __typename?: 'Modelset';
  artifacts: Array<Artifact>;
  contributors: Array<User>;
  deprecated: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** keywords split by comma or white space */
  keywords?: Maybe<Scalars['String']>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
  models: Array<Model>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  owner?: Maybe<User>;
  private: Scalars['Boolean'];
  sampleCode?: Maybe<Scalars['String']>;
};


export type ModelsetArtifactsArgs = {
  after?: Maybe<ArtifactWhereUniqueInput>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ModelsetContributorsArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ModelsetModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ModelsetModelsOrderByInput>>;
  where?: Maybe<ModelsetModelsWhereInput>;
};

export type ModelsetCreateInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateNestedManyWithoutContributorsInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutContributorsInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutContributorsInput>>;
};

export type ModelsetCreateNestedManyWithoutOrganizationInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOrganizationInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutOrganizationInput>>;
};

export type ModelsetCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutOwnerInput>>;
};

export type ModelsetCreateNestedManyWithoutPropertiesInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutPropertiesInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutPropertiesInput>>;
};

export type ModelsetCreateNestedOneWithoutArtifactsInput = {
  connect?: Maybe<ModelsetWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutArtifactsInput>;
  create?: Maybe<ModelsetCreateWithoutArtifactsInput>;
};

export type ModelsetCreateNestedOneWithoutModelsInput = {
  connect?: Maybe<ModelsetWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutModelsInput>;
  create?: Maybe<ModelsetCreateWithoutModelsInput>;
};

export type ModelsetCreateOrConnectWithoutArtifactsInput = {
  create: ModelsetCreateWithoutArtifactsInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateOrConnectWithoutContributorsInput = {
  create: ModelsetCreateWithoutContributorsInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateOrConnectWithoutModelsInput = {
  create: ModelsetCreateWithoutModelsInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateOrConnectWithoutOrganizationInput = {
  create: ModelsetCreateWithoutOrganizationInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateOrConnectWithoutOwnerInput = {
  create: ModelsetCreateWithoutOwnerInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateOrConnectWithoutPropertiesInput = {
  create: ModelsetCreateWithoutPropertiesInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetCreateWithoutArtifactsInput = {
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateWithoutContributorsInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateWithoutModelsInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateWithoutOrganizationInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateWithoutOwnerInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetCreateWithoutPropertiesInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutModelsetInput>;
  name: Scalars['String'];
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
};

export type ModelsetListRelationFilter = {
  every?: Maybe<ModelsetWhereInput>;
  none?: Maybe<ModelsetWhereInput>;
  some?: Maybe<ModelsetWhereInput>;
};

export type ModelsetModelsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  method?: Maybe<MethodOrderByInput>;
  ownerId?: Maybe<SortOrder>;
  property?: Maybe<PropertyOrderByInput>;
  updatedAt?: Maybe<SortOrder>;
};

export type ModelsetModelsWhereInput = {
  descriptor?: Maybe<DescriptorWhereInput>;
  keywords?: Maybe<StringNullableFilter>;
  method?: Maybe<MethodWhereInput>;
  ownerId?: Maybe<IntNullableFilter>;
  property?: Maybe<PropertyWhereInput>;
};

export type ModelsetOrderByInput = {
  deprecated?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  organization?: Maybe<OrganizationOrderByInput>;
  organizationId?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  sampleCode?: Maybe<SortOrder>;
};

export type ModelsetScalarWhereInput = {
  AND?: Maybe<Array<ModelsetScalarWhereInput>>;
  NOT?: Maybe<Array<ModelsetScalarWhereInput>>;
  OR?: Maybe<Array<ModelsetScalarWhereInput>>;
  deprecated?: Maybe<BoolFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  private?: Maybe<BoolFilter>;
  sampleCode?: Maybe<StringNullableFilter>;
};

export type ModelsetUpdateInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateManyMutationInput = {
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateManyWithWhereWithoutContributorsInput = {
  data: ModelsetUpdateManyMutationInput;
  where: ModelsetScalarWhereInput;
};

export type ModelsetUpdateManyWithWhereWithoutOrganizationInput = {
  data: ModelsetUpdateManyMutationInput;
  where: ModelsetScalarWhereInput;
};

export type ModelsetUpdateManyWithWhereWithoutOwnerInput = {
  data: ModelsetUpdateManyMutationInput;
  where: ModelsetScalarWhereInput;
};

export type ModelsetUpdateManyWithWhereWithoutPropertiesInput = {
  data: ModelsetUpdateManyMutationInput;
  where: ModelsetScalarWhereInput;
};

export type ModelsetUpdateManyWithoutContributorsInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutContributorsInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutContributorsInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutContributorsInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutContributorsInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutContributorsInput>>;
};

export type ModelsetUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOrganizationInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type ModelsetUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ModelsetUpdateManyWithoutPropertiesInput = {
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutPropertiesInput>>;
  create?: Maybe<Array<ModelsetCreateWithoutPropertiesInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutPropertiesInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutPropertiesInput>>;
};

export type ModelsetUpdateOneWithoutArtifactsInput = {
  connect?: Maybe<ModelsetWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutArtifactsInput>;
  create?: Maybe<ModelsetCreateWithoutArtifactsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelsetUpdateWithoutArtifactsInput>;
  upsert?: Maybe<ModelsetUpsertWithoutArtifactsInput>;
};

export type ModelsetUpdateOneWithoutModelsInput = {
  connect?: Maybe<ModelsetWhereUniqueInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutModelsInput>;
  create?: Maybe<ModelsetCreateWithoutModelsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelsetUpdateWithoutModelsInput>;
  upsert?: Maybe<ModelsetUpsertWithoutModelsInput>;
};

export type ModelsetUpdateWithWhereUniqueWithoutContributorsInput = {
  data: ModelsetUpdateWithoutContributorsInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: ModelsetUpdateWithoutOrganizationInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ModelsetUpdateWithoutOwnerInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutPropertiesInput = {
  data: ModelsetUpdateWithoutPropertiesInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpdateWithoutArtifactsInput = {
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutContributorsInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutModelsInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutOrganizationInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutOwnerInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutPropertiesInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutModelsetInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpsertWithWhereUniqueWithoutContributorsInput = {
  create: ModelsetCreateWithoutContributorsInput;
  update: ModelsetUpdateWithoutContributorsInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: ModelsetCreateWithoutOrganizationInput;
  update: ModelsetUpdateWithoutOrganizationInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ModelsetCreateWithoutOwnerInput;
  update: ModelsetUpdateWithoutOwnerInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutPropertiesInput = {
  create: ModelsetCreateWithoutPropertiesInput;
  update: ModelsetUpdateWithoutPropertiesInput;
  where: ModelsetWhereUniqueInput;
};

export type ModelsetUpsertWithoutArtifactsInput = {
  create: ModelsetCreateWithoutArtifactsInput;
  update: ModelsetUpdateWithoutArtifactsInput;
};

export type ModelsetUpsertWithoutModelsInput = {
  create: ModelsetCreateWithoutModelsInput;
  update: ModelsetUpdateWithoutModelsInput;
};

export type ModelsetWhereInput = {
  AND?: Maybe<Array<ModelsetWhereInput>>;
  NOT?: Maybe<Array<ModelsetWhereInput>>;
  OR?: Maybe<Array<ModelsetWhereInput>>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  contributors?: Maybe<UserListRelationFilter>;
  deprecated?: Maybe<BoolFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableFilter>;
  models?: Maybe<ModelListRelationFilter>;
  name?: Maybe<StringFilter>;
  organization?: Maybe<OrganizationWhereInput>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  private?: Maybe<BoolFilter>;
  properties?: Maybe<PropertyListRelationFilter>;
  sampleCode?: Maybe<StringNullableFilter>;
};

export type ModelsetWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['Boolean'];
  createOneDescriptor: Descriptor;
  createOneMethod: Method;
  createOneModelset: Modelset;
  createOneProperty: Property;
  deleteOneDescriptor?: Maybe<Descriptor>;
  deleteOneMethod?: Maybe<Method>;
  deleteOneModelset?: Maybe<Modelset>;
  deleteOneProperty?: Maybe<Property>;
  updateOneDescriptor?: Maybe<Descriptor>;
  updateOneMethod?: Maybe<Method>;
  updateOneModelset?: Maybe<Modelset>;
  updateOneProperty?: Maybe<Property>;
  updateOneUser?: Maybe<User>;
  uploadArtifact: Artifact;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationCreateOneDescriptorArgs = {
  data: DescriptorCreateInput;
};


export type MutationCreateOneMethodArgs = {
  data: MethodCreateInput;
};


export type MutationCreateOneModelsetArgs = {
  data: ModelsetCreateInput;
};


export type MutationCreateOnePropertyArgs = {
  data: PropertyCreateInput;
};


export type MutationDeleteOneDescriptorArgs = {
  where: DescriptorWhereUniqueInput;
};


export type MutationDeleteOneMethodArgs = {
  where: MethodWhereUniqueInput;
};


export type MutationDeleteOneModelsetArgs = {
  where: ModelsetWhereUniqueInput;
};


export type MutationDeleteOnePropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type MutationUpdateOneDescriptorArgs = {
  data: DescriptorUpdateInput;
  where: DescriptorWhereUniqueInput;
};


export type MutationUpdateOneMethodArgs = {
  data: MethodUpdateInput;
  where: MethodWhereUniqueInput;
};


export type MutationUpdateOneModelsetArgs = {
  data: ModelsetUpdateInput;
  where: ModelsetWhereUniqueInput;
};


export type MutationUpdateOnePropertyArgs = {
  data: PropertyUpdateInput;
  where: PropertyWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUploadArtifactArgs = {
  file: Scalars['Upload'];
  modelsetId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  artifacts: Array<Artifact>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  members: Array<User>;
  modelsets: Array<Modelset>;
  name: Scalars['String'];
  owner?: Maybe<User>;
};


export type OrganizationArtifactsArgs = {
  after?: Maybe<ArtifactWhereUniqueInput>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationMembersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationModelsetsArgs = {
  after?: Maybe<ModelsetWhereUniqueInput>;
  before?: Maybe<ModelsetWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationCreateNestedManyWithoutMembersInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutMembersInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutMembersInput>>;
};

export type OrganizationCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutOwnerInput>>;
};

export type OrganizationCreateNestedOneWithoutArtifactsInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutArtifactsInput>;
  create?: Maybe<OrganizationCreateWithoutArtifactsInput>;
};

export type OrganizationCreateNestedOneWithoutModelsetsInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutModelsetsInput>;
  create?: Maybe<OrganizationCreateWithoutModelsetsInput>;
};

export type OrganizationCreateOrConnectWithoutArtifactsInput = {
  create: OrganizationCreateWithoutArtifactsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutMembersInput = {
  create: OrganizationCreateWithoutMembersInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutModelsetsInput = {
  create: OrganizationCreateWithoutModelsetsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutOwnerInput = {
  create: OrganizationCreateWithoutOwnerInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateWithoutArtifactsInput = {
  description?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
  name: Scalars['String'];
};

export type OrganizationCreateWithoutMembersInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  description?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
  name: Scalars['String'];
};

export type OrganizationCreateWithoutModelsetsInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  description?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
  name: Scalars['String'];
};

export type OrganizationCreateWithoutOwnerInput = {
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  description?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
  name: Scalars['String'];
};

export type OrganizationListRelationFilter = {
  every?: Maybe<OrganizationWhereInput>;
  none?: Maybe<OrganizationWhereInput>;
  some?: Maybe<OrganizationWhereInput>;
};

export type OrganizationOrderByInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type OrganizationScalarWhereInput = {
  AND?: Maybe<Array<OrganizationScalarWhereInput>>;
  NOT?: Maybe<Array<OrganizationScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type OrganizationUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateManyWithWhereWithoutMembersInput = {
  data: OrganizationUpdateManyMutationInput;
  where: OrganizationScalarWhereInput;
};

export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
  data: OrganizationUpdateManyMutationInput;
  where: OrganizationScalarWhereInput;
};

export type OrganizationUpdateManyWithoutMembersInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutMembersInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutMembersInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereWithoutMembersInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type OrganizationUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type OrganizationUpdateOneWithoutArtifactsInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutArtifactsInput>;
  create?: Maybe<OrganizationCreateWithoutArtifactsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrganizationUpdateWithoutArtifactsInput>;
  upsert?: Maybe<OrganizationUpsertWithoutArtifactsInput>;
};

export type OrganizationUpdateOneWithoutModelsetsInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutModelsetsInput>;
  create?: Maybe<OrganizationCreateWithoutModelsetsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrganizationUpdateWithoutModelsetsInput>;
  upsert?: Maybe<OrganizationUpsertWithoutModelsetsInput>;
};

export type OrganizationUpdateWithWhereUniqueWithoutMembersInput = {
  data: OrganizationUpdateWithoutMembersInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
  data: OrganizationUpdateWithoutOwnerInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateWithoutArtifactsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutMembersInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutModelsetsInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutOwnerInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationUpsertWithWhereUniqueWithoutMembersInput = {
  create: OrganizationCreateWithoutMembersInput;
  update: OrganizationUpdateWithoutMembersInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
  create: OrganizationCreateWithoutOwnerInput;
  update: OrganizationUpdateWithoutOwnerInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithoutArtifactsInput = {
  create: OrganizationCreateWithoutArtifactsInput;
  update: OrganizationUpdateWithoutArtifactsInput;
};

export type OrganizationUpsertWithoutModelsetsInput = {
  create: OrganizationCreateWithoutModelsetsInput;
  update: OrganizationUpdateWithoutModelsetsInput;
};

export type OrganizationWhereInput = {
  AND?: Maybe<Array<OrganizationWhereInput>>;
  NOT?: Maybe<Array<OrganizationWhereInput>>;
  OR?: Maybe<Array<OrganizationWhereInput>>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  members?: Maybe<UserListRelationFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type OrganizationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
  models: Array<Model>;
  name: Scalars['String'];
  owner?: Maybe<User>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};


export type PropertyModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PropertyModelsOrderByInput>>;
  where?: Maybe<PropertyModelsWhereInput>;
};

export type PropertyCreateInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutPropertyInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyCreateNestedManyWithoutModelsetsInput = {
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutModelsetsInput>>;
  create?: Maybe<Array<PropertyCreateWithoutModelsetsInput>>;
};

export type PropertyCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<PropertyCreateWithoutOwnerInput>>;
};

export type PropertyCreateNestedOneWithoutModelsInput = {
  connect?: Maybe<PropertyWhereUniqueInput>;
  connectOrCreate?: Maybe<PropertyCreateOrConnectWithoutModelsInput>;
  create?: Maybe<PropertyCreateWithoutModelsInput>;
};

export type PropertyCreateOrConnectWithoutModelsInput = {
  create: PropertyCreateWithoutModelsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateOrConnectWithoutModelsetsInput = {
  create: PropertyCreateWithoutModelsetsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateOrConnectWithoutOwnerInput = {
  create: PropertyCreateWithoutOwnerInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateWithoutModelsInput = {
  description?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyCreateWithoutModelsetsInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutPropertyInput>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyCreateWithoutOwnerInput = {
  description?: Maybe<Scalars['String']>;
  models?: Maybe<ModelCreateNestedManyWithoutPropertyInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyListRelationFilter = {
  every?: Maybe<PropertyWhereInput>;
  none?: Maybe<PropertyWhereInput>;
  some?: Maybe<PropertyWhereInput>;
};

export type PropertyModelsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type PropertyModelsWhereInput = {
  keywords?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type PropertyOrderByInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  symbol?: Maybe<SortOrder>;
  unit?: Maybe<SortOrder>;
};

export type PropertyScalarWhereInput = {
  AND?: Maybe<Array<PropertyScalarWhereInput>>;
  NOT?: Maybe<Array<PropertyScalarWhereInput>>;
  OR?: Maybe<Array<PropertyScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  symbol?: Maybe<StringNullableFilter>;
  unit?: Maybe<StringNullableFilter>;
};

export type PropertyUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutPropertyInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyWithWhereWithoutModelsetsInput = {
  data: PropertyUpdateManyMutationInput;
  where: PropertyScalarWhereInput;
};

export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
  data: PropertyUpdateManyMutationInput;
  where: PropertyScalarWhereInput;
};

export type PropertyUpdateManyWithoutModelsetsInput = {
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutModelsetsInput>>;
  create?: Maybe<Array<PropertyCreateWithoutModelsetsInput>>;
  delete?: Maybe<Array<PropertyWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PropertyScalarWhereInput>>;
  disconnect?: Maybe<Array<PropertyWhereUniqueInput>>;
  set?: Maybe<Array<PropertyWhereUniqueInput>>;
  update?: Maybe<Array<PropertyUpdateWithWhereUniqueWithoutModelsetsInput>>;
  updateMany?: Maybe<Array<PropertyUpdateManyWithWhereWithoutModelsetsInput>>;
  upsert?: Maybe<Array<PropertyUpsertWithWhereUniqueWithoutModelsetsInput>>;
};

export type PropertyUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<PropertyCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<PropertyWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PropertyScalarWhereInput>>;
  disconnect?: Maybe<Array<PropertyWhereUniqueInput>>;
  set?: Maybe<Array<PropertyWhereUniqueInput>>;
  update?: Maybe<Array<PropertyUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<PropertyUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<PropertyUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type PropertyUpdateOneWithoutModelsInput = {
  connect?: Maybe<PropertyWhereUniqueInput>;
  connectOrCreate?: Maybe<PropertyCreateOrConnectWithoutModelsInput>;
  create?: Maybe<PropertyCreateWithoutModelsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PropertyUpdateWithoutModelsInput>;
  upsert?: Maybe<PropertyUpsertWithoutModelsInput>;
};

export type PropertyUpdateWithWhereUniqueWithoutModelsetsInput = {
  data: PropertyUpdateWithoutModelsetsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
  data: PropertyUpdateWithoutOwnerInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpdateWithoutModelsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutModelsetsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutPropertyInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutOwnerInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  models?: Maybe<ModelUpdateManyWithoutPropertyInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpsertWithWhereUniqueWithoutModelsetsInput = {
  create: PropertyCreateWithoutModelsetsInput;
  update: PropertyUpdateWithoutModelsetsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
  create: PropertyCreateWithoutOwnerInput;
  update: PropertyUpdateWithoutOwnerInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpsertWithoutModelsInput = {
  create: PropertyCreateWithoutModelsInput;
  update: PropertyUpdateWithoutModelsInput;
};

export type PropertyWhereInput = {
  AND?: Maybe<Array<PropertyWhereInput>>;
  NOT?: Maybe<Array<PropertyWhereInput>>;
  OR?: Maybe<Array<PropertyWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  models?: Maybe<ModelListRelationFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  symbol?: Maybe<StringNullableFilter>;
  unit?: Maybe<StringNullableFilter>;
};

export type PropertyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** The version of currently API */
  apiVersion: Scalars['String'];
  artifact?: Maybe<Artifact>;
  artifacts: Array<Artifact>;
  descriptor?: Maybe<Descriptor>;
  descriptors: Array<Descriptor>;
  method?: Maybe<Method>;
  methods: Array<Method>;
  model?: Maybe<Model>;
  models: Array<Model>;
  organization?: Maybe<Organization>;
  organizations: Array<Organization>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryArtifactArgs = {
  where: ArtifactWhereUniqueInput;
};


export type QueryArtifactsArgs = {
  after?: Maybe<ArtifactWhereUniqueInput>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<ArtifactWhereInput>;
};


export type QueryDescriptorArgs = {
  where: DescriptorWhereUniqueInput;
};


export type QueryDescriptorsArgs = {
  after?: Maybe<DescriptorWhereUniqueInput>;
  before?: Maybe<DescriptorWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<QueryDescriptorsOrderByInput>>;
  where?: Maybe<QueryDescriptorsWhereInput>;
};


export type QueryMethodArgs = {
  where: MethodWhereUniqueInput;
};


export type QueryMethodsArgs = {
  after?: Maybe<MethodWhereUniqueInput>;
  before?: Maybe<MethodWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<QueryMethodsOrderByInput>>;
  where?: Maybe<QueryMethodsWhereInput>;
};


export type QueryModelArgs = {
  where: ModelWhereUniqueInput;
};


export type QueryModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ModelOrderByInput>>;
  where?: Maybe<ModelWhereInput>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationsArgs = {
  after?: Maybe<OrganizationWhereUniqueInput>;
  before?: Maybe<OrganizationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<QueryOrganizationsOrderByInput>>;
  where?: Maybe<QueryOrganizationsWhereInput>;
};


export type QueryPropertiesArgs = {
  after?: Maybe<PropertyWhereUniqueInput>;
  before?: Maybe<PropertyWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<QueryPropertiesOrderByInput>>;
  where?: Maybe<QueryPropertiesWhereInput>;
};


export type QueryPropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<QueryUsersWhereInput>;
};

export type QueryDescriptorsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type QueryDescriptorsWhereInput = {
  description?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
};

export type QueryMethodsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type QueryMethodsWhereInput = {
  description?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type QueryOrganizationsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type QueryOrganizationsWhereInput = {
  description?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
};

export type QueryPropertiesOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type QueryPropertiesWhereInput = {
  description?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  unit?: Maybe<StringNullableFilter>;
};

export type QueryUsersWhereInput = {
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  name?: Maybe<StringNullableFilter>;
};

export type RegressionMetric = {
  __typename?: 'RegressionMetric';
  id: Scalars['Int'];
  maxAbsError?: Maybe<Scalars['Float']>;
  meanAbsError?: Maybe<Scalars['Float']>;
  meanSquareError?: Maybe<Scalars['Float']>;
  pValue?: Maybe<Scalars['Float']>;
  pearsonCorr?: Maybe<Scalars['Float']>;
  r2?: Maybe<Scalars['Float']>;
  rootMeanSquareError?: Maybe<Scalars['Float']>;
  spearmanCorr?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricCreateNestedOneWithoutModelInput = {
  connect?: Maybe<RegressionMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<RegressionMetricCreateOrConnectWithoutModelInput>;
  create?: Maybe<RegressionMetricCreateWithoutModelInput>;
};

export type RegressionMetricCreateOrConnectWithoutModelInput = {
  create: RegressionMetricCreateWithoutModelInput;
  where: RegressionMetricWhereUniqueInput;
};

export type RegressionMetricCreateWithoutModelInput = {
  maxAbsError?: Maybe<Scalars['Float']>;
  meanAbsError?: Maybe<Scalars['Float']>;
  meanSquareError?: Maybe<Scalars['Float']>;
  pValue?: Maybe<Scalars['Float']>;
  pearsonCorr?: Maybe<Scalars['Float']>;
  r2?: Maybe<Scalars['Float']>;
  rootMeanSquareError?: Maybe<Scalars['Float']>;
  spearmanCorr?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricOrderByInput = {
  id?: Maybe<SortOrder>;
  maxAbsError?: Maybe<SortOrder>;
  meanAbsError?: Maybe<SortOrder>;
  meanSquareError?: Maybe<SortOrder>;
  modelId?: Maybe<SortOrder>;
  pValue?: Maybe<SortOrder>;
  pearsonCorr?: Maybe<SortOrder>;
  r2?: Maybe<SortOrder>;
  rootMeanSquareError?: Maybe<SortOrder>;
  spearmanCorr?: Maybe<SortOrder>;
  supplementary?: Maybe<SortOrder>;
};

export type RegressionMetricUpdateOneWithoutModelInput = {
  connect?: Maybe<RegressionMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<RegressionMetricCreateOrConnectWithoutModelInput>;
  create?: Maybe<RegressionMetricCreateWithoutModelInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RegressionMetricUpdateWithoutModelInput>;
  upsert?: Maybe<RegressionMetricUpsertWithoutModelInput>;
};

export type RegressionMetricUpdateWithoutModelInput = {
  maxAbsError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  meanAbsError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  meanSquareError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  pValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  pearsonCorr?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  r2?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  rootMeanSquareError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  spearmanCorr?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricUpsertWithoutModelInput = {
  create: RegressionMetricCreateWithoutModelInput;
  update: RegressionMetricUpdateWithoutModelInput;
};

export type RegressionMetricWhereInput = {
  AND?: Maybe<Array<RegressionMetricWhereInput>>;
  NOT?: Maybe<Array<RegressionMetricWhereInput>>;
  OR?: Maybe<Array<RegressionMetricWhereInput>>;
  id?: Maybe<IntFilter>;
  maxAbsError?: Maybe<FloatNullableFilter>;
  meanAbsError?: Maybe<FloatNullableFilter>;
  meanSquareError?: Maybe<FloatNullableFilter>;
  model?: Maybe<ModelWhereInput>;
  modelId?: Maybe<IntFilter>;
  pValue?: Maybe<FloatNullableFilter>;
  pearsonCorr?: Maybe<FloatNullableFilter>;
  r2?: Maybe<FloatNullableFilter>;
  rootMeanSquareError?: Maybe<FloatNullableFilter>;
  spearmanCorr?: Maybe<FloatNullableFilter>;
  supplementary?: Maybe<JsonNullableFilter>;
};

export type RegressionMetricWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
};

export enum Role {
  Admin = 'ADMIN',
  Master = 'MASTER',
  Tester = 'TESTER',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  apiKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  descriptors: Array<Descriptor>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
  models: Array<Model>;
  name?: Maybe<Scalars['String']>;
  role: Role;
  updatedAt: Scalars['DateTime'];
};


export type UserDescriptorsArgs = {
  after?: Maybe<DescriptorWhereUniqueInput>;
  before?: Maybe<DescriptorWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserModelsArgs = {
  after?: Maybe<ModelWhereUniqueInput>;
  before?: Maybe<ModelWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserCreateNestedManyWithoutContributedModelSetsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutContributedModelSetsInput>>;
  create?: Maybe<Array<UserCreateWithoutContributedModelSetsInput>>;
};

export type UserCreateNestedManyWithoutJoinedOrganizationsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutJoinedOrganizationsInput>>;
  create?: Maybe<Array<UserCreateWithoutJoinedOrganizationsInput>>;
};

export type UserCreateOrConnectWithoutContributedModelSetsInput = {
  create: UserCreateWithoutContributedModelSetsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutJoinedOrganizationsInput = {
  create: UserCreateWithoutJoinedOrganizationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutContributedModelSetsInput = {
  apiKey?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOwnerInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptors?: Maybe<DescriptorCreateNestedManyWithoutOwnerInput>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  hashedPW?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  joinedOrganizations?: Maybe<OrganizationCreateNestedManyWithoutMembersInput>;
  methods?: Maybe<MethodCreateNestedManyWithoutOwnerInput>;
  models?: Maybe<ModelCreateNestedManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  organizations?: Maybe<OrganizationCreateNestedManyWithoutOwnerInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutOwnerInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutJoinedOrganizationsInput = {
  apiKey?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetCreateNestedManyWithoutContributorsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptors?: Maybe<DescriptorCreateNestedManyWithoutOwnerInput>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  hashedPW?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  methods?: Maybe<MethodCreateNestedManyWithoutOwnerInput>;
  models?: Maybe<ModelCreateNestedManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  organizations?: Maybe<OrganizationCreateNestedManyWithoutOwnerInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutOwnerInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  apiKey?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  hashedPW?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserUpdateInput = {
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetUpdateManyWithoutContributorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  joinedOrganizations?: Maybe<OrganizationUpdateManyWithoutMembersInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  models?: Maybe<ModelUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutContributedModelSetsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutJoinedOrganizationsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutContributedModelSetsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutContributedModelSetsInput>>;
  create?: Maybe<Array<UserCreateWithoutContributedModelSetsInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutContributedModelSetsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutContributedModelSetsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutContributedModelSetsInput>>;
};

export type UserUpdateManyWithoutJoinedOrganizationsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutJoinedOrganizationsInput>>;
  create?: Maybe<Array<UserCreateWithoutJoinedOrganizationsInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutJoinedOrganizationsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput>>;
};

export type UserUpdateWithWhereUniqueWithoutContributedModelSetsInput = {
  data: UserUpdateWithoutContributedModelSetsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput = {
  data: UserUpdateWithoutJoinedOrganizationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutContributedModelSetsInput = {
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  joinedOrganizations?: Maybe<OrganizationUpdateManyWithoutMembersInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  models?: Maybe<ModelUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutJoinedOrganizationsInput = {
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetUpdateManyWithoutContributorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  models?: Maybe<ModelUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutContributedModelSetsInput = {
  create: UserCreateWithoutContributedModelSetsInput;
  update: UserUpdateWithoutContributedModelSetsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput = {
  create: UserCreateWithoutJoinedOrganizationsInput;
  update: UserUpdateWithoutJoinedOrganizationsInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  apiKey?: Maybe<StringNullableFilter>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  contributedModelSets?: Maybe<ModelsetListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptors?: Maybe<DescriptorListRelationFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  hashedPW?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  joinedOrganizations?: Maybe<OrganizationListRelationFilter>;
  methods?: Maybe<MethodListRelationFilter>;
  models?: Maybe<ModelListRelationFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  organizations?: Maybe<OrganizationListRelationFilter>;
  properties?: Maybe<PropertyListRelationFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  apiKey?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hashedPW?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};
