import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  Json: any;
};




export type Artifact = {
  __typename?: 'Artifact';
  id: Scalars['Int'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  path: Scalars['String'];
  organization?: Maybe<Organization>;
  owner: User;
  modelset?: Maybe<Modelset>;
};

export type Descriptor = {
  __typename?: 'Descriptor';
  id: Scalars['Int'];
  owner?: Maybe<User>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  models: Array<Model>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
};


export type DescriptorModelsArgs = {
  where?: Maybe<ModelWhereInput>;
  orderBy?: Maybe<Array<DescriptorModelsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
};

export type Method = {
  __typename?: 'Method';
  id: Scalars['Int'];
  owner?: Maybe<User>;
  models: Array<Model>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
};


export type MethodModelsArgs = {
  where?: Maybe<ModelWhereInput>;
  orderBy?: Maybe<Array<MethodModelsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
};

export type Metric = ClassificationMetric | RegressionMetric;

export type Model = {
  __typename?: 'Model';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  artifact: Artifact;
  /** keywords split by comma or white space */
  keywords?: Maybe<Scalars['String']>;
  deprecated: Scalars['Boolean'];
  succeed: Scalars['Boolean'];
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  downloads?: Maybe<Scalars['Int']>;
  owner?: Maybe<User>;
  metrics?: Maybe<Metric>;
  /** name of descriptor */
  descriptor?: Maybe<Scalars['String']>;
  /** name of method */
  method?: Maybe<Scalars['String']>;
  /** name of property */
  property?: Maybe<Scalars['String']>;
  /** name of modelset */
  modelset?: Maybe<Scalars['String']>;
};

export type ModelUrl = {
  __typename?: 'ModelUrl';
  url: Scalars['String'];
  id: Scalars['Int'];
};

export type RegressionMetric = {
  __typename?: 'RegressionMetric';
  maxAbsError?: Maybe<Scalars['Float']>;
  meanAbsError?: Maybe<Scalars['Float']>;
  meanSquareError?: Maybe<Scalars['Float']>;
  rootMeanSquareError?: Maybe<Scalars['Float']>;
  r2?: Maybe<Scalars['Float']>;
  pValue?: Maybe<Scalars['Float']>;
  spearmanCorr?: Maybe<Scalars['Float']>;
  pearsonCorr?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricCreateWithModel = {
  maxAbsError?: Maybe<Scalars['Float']>;
  meanAbsError?: Maybe<Scalars['Float']>;
  meanSquareError?: Maybe<Scalars['Float']>;
  rootMeanSquareError?: Maybe<Scalars['Float']>;
  r2?: Maybe<Scalars['Float']>;
  pValue?: Maybe<Scalars['Float']>;
  pearsonCorr?: Maybe<Scalars['Float']>;
  spearmanCorr?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetric = {
  __typename?: 'ClassificationMetric';
  accuracy?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  recall?: Maybe<Scalars['Float']>;
  f1?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  prevalence?: Maybe<Scalars['Float']>;
  specificity?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  npv?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricCreateWithModel = {
  accuracy?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  recall?: Maybe<Scalars['Float']>;
  f1?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  prevalence?: Maybe<Scalars['Float']>;
  specificity?: Maybe<Scalars['Float']>;
  npv?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type Modelset = {
  __typename?: 'Modelset';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** keywords split by comma or white space */
  keywords?: Maybe<Scalars['String']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated: Scalars['Boolean'];
  private: Scalars['Boolean'];
  organization?: Maybe<Organization>;
  owner?: Maybe<User>;
  artifacts: Array<Artifact>;
  contributors: Array<User>;
  models: Array<Model>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
};


export type ModelsetArtifactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  after?: Maybe<ArtifactWhereUniqueInput>;
};


export type ModelsetContributorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type ModelsetModelsArgs = {
  where?: Maybe<ModelWhereInput>;
  orderBy?: Maybe<Array<ModelsetModelsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  modelsets: Array<Modelset>;
  members: Array<User>;
  artifacts: Array<Artifact>;
};


export type OrganizationModelsetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelsetWhereUniqueInput>;
  after?: Maybe<ModelsetWhereUniqueInput>;
};


export type OrganizationMembersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type OrganizationArtifactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  after?: Maybe<ArtifactWhereUniqueInput>;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  models: Array<Model>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
};


export type PropertyModelsArgs = {
  where?: Maybe<ModelWhereInput>;
  orderBy?: Maybe<Array<PropertyModelsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  role: Role;
  email?: Maybe<Scalars['String']>;
  descriptors: Array<Descriptor>;
  models: Array<Model>;
  /** number of models */
  modelCounts?: Maybe<Scalars['Int']>;
};


export type UserDescriptorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DescriptorWhereUniqueInput>;
  after?: Maybe<DescriptorWhereUniqueInput>;
};


export type UserModelsArgs = {
  where?: Maybe<ModelWhereInput>;
  orderBy?: Maybe<Array<UserModelsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
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
  getModelUrls?: Maybe<Array<Maybe<ModelUrl>>>;
  modelset?: Maybe<Modelset>;
  modelsets: Array<Modelset>;
  organization?: Maybe<Organization>;
  organizations: Array<Organization>;
  property?: Maybe<Property>;
  properties: Array<Property>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Number of all models */
  statistic: DbStatistic;
};


export type QueryArtifactArgs = {
  where: ArtifactWhereUniqueInput;
};


export type QueryArtifactsArgs = {
  where?: Maybe<ArtifactWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  after?: Maybe<ArtifactWhereUniqueInput>;
};


export type QueryDescriptorArgs = {
  where: DescriptorWhereUniqueInput;
};


export type QueryDescriptorsArgs = {
  where?: Maybe<DescriptorWhereInput>;
  orderBy?: Maybe<Array<QueryDescriptorsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DescriptorWhereUniqueInput>;
  after?: Maybe<DescriptorWhereUniqueInput>;
};


export type QueryMethodArgs = {
  where: MethodWhereUniqueInput;
};


export type QueryMethodsArgs = {
  where?: Maybe<MethodWhereInput>;
  orderBy?: Maybe<Array<QueryMethodsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<MethodWhereUniqueInput>;
  after?: Maybe<MethodWhereUniqueInput>;
};


export type QueryModelArgs = {
  where: ModelWhereUniqueInput;
};


export type QueryModelsArgs = {
  where?: Maybe<QueryModelsWhereInput>;
  orderBy?: Maybe<Array<ModelOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelWhereUniqueInput>;
  after?: Maybe<ModelWhereUniqueInput>;
};


export type QueryGetModelUrlsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryModelsetArgs = {
  where: ModelsetWhereUniqueInput;
};


export type QueryModelsetsArgs = {
  where?: Maybe<ModelsetWhereInput>;
  orderBy?: Maybe<Array<QueryModelsetsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ModelsetWhereUniqueInput>;
  after?: Maybe<ModelsetWhereUniqueInput>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationsArgs = {
  where?: Maybe<OrganizationWhereInput>;
  orderBy?: Maybe<Array<QueryOrganizationsOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrganizationWhereUniqueInput>;
  after?: Maybe<OrganizationWhereUniqueInput>;
};


export type QueryPropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type QueryPropertiesArgs = {
  where?: Maybe<PropertyWhereInput>;
  orderBy?: Maybe<Array<QueryPropertiesOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PropertyWhereUniqueInput>;
  after?: Maybe<PropertyWhereUniqueInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<QueryUsersWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

/** Statistic information of current database */
export type DbStatistic = {
  __typename?: 'DBStatistic';
  all?: Maybe<Scalars['Int']>;
  regressionModels?: Maybe<Scalars['Int']>;
  classificationModels?: Maybe<Scalars['Int']>;
  others?: Maybe<Scalars['Int']>;
};

export enum Role {
  User = 'USER',
  Master = 'MASTER',
  Tester = 'TESTER',
  Admin = 'ADMIN'
}

export type ArtifactWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type ArtifactWhereInput = {
  AND?: Maybe<Array<ArtifactWhereInput>>;
  OR?: Maybe<Array<ArtifactWhereInput>>;
  NOT?: Maybe<Array<ArtifactWhereInput>>;
  id?: Maybe<IntFilter>;
  path?: Maybe<StringFilter>;
  etag?: Maybe<StringFilter>;
  filename?: Maybe<StringFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntFilter>;
  setId?: Maybe<IntNullableFilter>;
  model?: Maybe<ModelWhereInput>;
  organization?: Maybe<OrganizationWhereInput>;
  modelset?: Maybe<ModelsetWhereInput>;
};

export type ModelWhereInput = {
  AND?: Maybe<Array<ModelWhereInput>>;
  OR?: Maybe<Array<ModelWhereInput>>;
  NOT?: Maybe<Array<ModelWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  keywords?: Maybe<StringNullableFilter>;
  deprecated?: Maybe<BoolFilter>;
  succeed?: Maybe<BoolFilter>;
  trainingEnv?: Maybe<JsonNullableFilter>;
  trainingInfo?: Maybe<JsonNullableFilter>;
  downloads?: Maybe<IntNullableFilter>;
  descriptorId?: Maybe<IntNullableFilter>;
  propertyId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  methodId?: Maybe<IntNullableFilter>;
  setId?: Maybe<IntNullableFilter>;
  artifactId?: Maybe<IntFilter>;
  artifact?: Maybe<ArtifactWhereInput>;
  descriptor?: Maybe<DescriptorWhereInput>;
  method?: Maybe<MethodWhereInput>;
  property?: Maybe<PropertyWhereInput>;
  modelset?: Maybe<ModelsetWhereInput>;
  clsMetricId?: Maybe<IntNullableFilter>;
  regMetricId?: Maybe<IntNullableFilter>;
  clsMetric?: Maybe<ClassificationMetricWhereInput>;
  regMetric?: Maybe<RegressionMetricWhereInput>;
};

export type DescriptorModelsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type ModelWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  clsMetricId?: Maybe<Scalars['Int']>;
  regMetricId?: Maybe<Scalars['Int']>;
};

export type DescriptorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type DescriptorWhereInput = {
  AND?: Maybe<Array<DescriptorWhereInput>>;
  OR?: Maybe<Array<DescriptorWhereInput>>;
  NOT?: Maybe<Array<DescriptorWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type QueryDescriptorsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type DescriptorCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DescriptorUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type MethodModelsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type MethodWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MethodWhereInput = {
  AND?: Maybe<Array<MethodWhereInput>>;
  OR?: Maybe<Array<MethodWhereInput>>;
  NOT?: Maybe<Array<MethodWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type QueryMethodsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type MethodCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MethodUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};


export type QueryModelsWhereInput = {
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableFilter>;
  deprecated?: Maybe<BoolFilter>;
  succeed?: Maybe<BoolFilter>;
  descriptorId?: Maybe<IntNullableFilter>;
  propertyId?: Maybe<IntNullableFilter>;
  methodId?: Maybe<IntNullableFilter>;
  setId?: Maybe<IntNullableFilter>;
  descriptor?: Maybe<DescriptorWhereInput>;
  method?: Maybe<MethodWhereInput>;
  property?: Maybe<PropertyWhereInput>;
  modelset?: Maybe<ModelsetWhereInput>;
  clsMetric?: Maybe<ClassificationMetricWhereInput>;
  regMetric?: Maybe<RegressionMetricWhereInput>;
};

export type ModelOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  deprecated?: Maybe<SortOrder>;
  succeed?: Maybe<SortOrder>;
  trainingEnv?: Maybe<SortOrder>;
  trainingInfo?: Maybe<SortOrder>;
  downloads?: Maybe<SortOrder>;
  descriptorId?: Maybe<SortOrder>;
  propertyId?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  methodId?: Maybe<SortOrder>;
  setId?: Maybe<SortOrder>;
  artifactId?: Maybe<SortOrder>;
  artifact?: Maybe<ArtifactOrderByInput>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetricId?: Maybe<SortOrder>;
  regMetricId?: Maybe<SortOrder>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  hashedPW?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
};

export type ModelsetModelsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type ModelsetWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ModelsetWhereInput = {
  AND?: Maybe<Array<ModelsetWhereInput>>;
  OR?: Maybe<Array<ModelsetWhereInput>>;
  NOT?: Maybe<Array<ModelsetWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  keywords?: Maybe<StringNullableFilter>;
  private?: Maybe<BoolFilter>;
  sampleCode?: Maybe<StringNullableFilter>;
  deprecated?: Maybe<BoolFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  organization?: Maybe<OrganizationWhereInput>;
  ownerId?: Maybe<IntNullableFilter>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  contributors?: Maybe<UserListRelationFilter>;
  properties?: Maybe<PropertyListRelationFilter>;
};

export type QueryModelsetsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ModelsetCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type OrganizationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type OrganizationWhereInput = {
  AND?: Maybe<Array<OrganizationWhereInput>>;
  OR?: Maybe<Array<OrganizationWhereInput>>;
  NOT?: Maybe<Array<OrganizationWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
  members?: Maybe<UserListRelationFilter>;
};

export type QueryOrganizationsOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PropertyModelsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type PropertyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type PropertyWhereInput = {
  AND?: Maybe<Array<PropertyWhereInput>>;
  OR?: Maybe<Array<PropertyWhereInput>>;
  NOT?: Maybe<Array<PropertyWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  symbol?: Maybe<StringNullableFilter>;
  unit?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
};

export type QueryPropertiesOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PropertyCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
};

export type PropertyUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
};

export type UserModelsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  descriptor?: Maybe<DescriptorOrderByInput>;
  method?: Maybe<MethodOrderByInput>;
  property?: Maybe<PropertyOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
  clsMetric?: Maybe<ClassificationMetricOrderByInput>;
  regMetric?: Maybe<RegressionMetricOrderByInput>;
};

export type QueryUsersWhereInput = {
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
};

export type UserUpdateInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetUpdateManyWithoutContributorsInput>;
  joinedOrganizations?: Maybe<OrganizationUpdateManyWithoutMembersInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricWhereInput = {
  AND?: Maybe<Array<ClassificationMetricWhereInput>>;
  OR?: Maybe<Array<ClassificationMetricWhereInput>>;
  NOT?: Maybe<Array<ClassificationMetricWhereInput>>;
  id?: Maybe<IntFilter>;
  accuracy?: Maybe<FloatNullableFilter>;
  precision?: Maybe<FloatNullableFilter>;
  recall?: Maybe<FloatNullableFilter>;
  f1?: Maybe<FloatNullableFilter>;
  sensitivity?: Maybe<FloatNullableFilter>;
  prevalence?: Maybe<FloatNullableFilter>;
  specificity?: Maybe<FloatNullableFilter>;
  ppv?: Maybe<FloatNullableFilter>;
  npv?: Maybe<FloatNullableFilter>;
  supplementary?: Maybe<JsonNullableFilter>;
  model?: Maybe<ModelWhereInput>;
};

export type RegressionMetricWhereInput = {
  AND?: Maybe<Array<RegressionMetricWhereInput>>;
  OR?: Maybe<Array<RegressionMetricWhereInput>>;
  NOT?: Maybe<Array<RegressionMetricWhereInput>>;
  id?: Maybe<IntFilter>;
  meanAbsError?: Maybe<FloatNullableFilter>;
  maxAbsError?: Maybe<FloatNullableFilter>;
  meanSquareError?: Maybe<FloatNullableFilter>;
  rootMeanSquareError?: Maybe<FloatNullableFilter>;
  r2?: Maybe<FloatNullableFilter>;
  pValue?: Maybe<FloatNullableFilter>;
  spearmanCorr?: Maybe<FloatNullableFilter>;
  pearsonCorr?: Maybe<FloatNullableFilter>;
  supplementary?: Maybe<JsonNullableFilter>;
  model?: Maybe<ModelWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type DescriptorOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type MethodOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type PropertyOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  symbol?: Maybe<SortOrder>;
  unit?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type ModelsetOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  sampleCode?: Maybe<SortOrder>;
  deprecated?: Maybe<SortOrder>;
  organizationId?: Maybe<SortOrder>;
  organization?: Maybe<OrganizationOrderByInput>;
  ownerId?: Maybe<SortOrder>;
};

export type ClassificationMetricOrderByInput = {
  id?: Maybe<SortOrder>;
  accuracy?: Maybe<SortOrder>;
  precision?: Maybe<SortOrder>;
  recall?: Maybe<SortOrder>;
  f1?: Maybe<SortOrder>;
  sensitivity?: Maybe<SortOrder>;
  prevalence?: Maybe<SortOrder>;
  specificity?: Maybe<SortOrder>;
  ppv?: Maybe<SortOrder>;
  npv?: Maybe<SortOrder>;
  supplementary?: Maybe<SortOrder>;
};

export type RegressionMetricOrderByInput = {
  id?: Maybe<SortOrder>;
  meanAbsError?: Maybe<SortOrder>;
  maxAbsError?: Maybe<SortOrder>;
  meanSquareError?: Maybe<SortOrder>;
  rootMeanSquareError?: Maybe<SortOrder>;
  r2?: Maybe<SortOrder>;
  pValue?: Maybe<SortOrder>;
  spearmanCorr?: Maybe<SortOrder>;
  pearsonCorr?: Maybe<SortOrder>;
  supplementary?: Maybe<SortOrder>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type ArtifactOrderByInput = {
  id?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  etag?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  organizationId?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  setId?: Maybe<SortOrder>;
  organization?: Maybe<OrganizationOrderByInput>;
  modelset?: Maybe<ModelsetOrderByInput>;
};

export type ArtifactListRelationFilter = {
  every?: Maybe<ArtifactWhereInput>;
  some?: Maybe<ArtifactWhereInput>;
  none?: Maybe<ArtifactWhereInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type PropertyListRelationFilter = {
  every?: Maybe<PropertyWhereInput>;
  some?: Maybe<PropertyWhereInput>;
  none?: Maybe<PropertyWhereInput>;
};

export type OrganizationCreateNestedOneWithoutModelsetsInput = {
  create?: Maybe<OrganizationCreateWithoutModelsetsInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutModelsetsInput>;
  connect?: Maybe<OrganizationWhereUniqueInput>;
};

export type ArtifactCreateNestedManyWithoutModelsetInput = {
  create?: Maybe<Array<ArtifactCreateWithoutModelsetInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutModelsetInput>>;
  createMany?: Maybe<ArtifactCreateManyModelsetInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutContributedModelSetsInput = {
  create?: Maybe<Array<UserCreateWithoutContributedModelSetsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutContributedModelSetsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type PropertyCreateNestedManyWithoutModelsetsInput = {
  create?: Maybe<Array<PropertyCreateWithoutModelsetsInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutModelsetsInput>>;
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type OrganizationUpdateOneWithoutModelsetsInput = {
  create?: Maybe<OrganizationCreateWithoutModelsetsInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutModelsetsInput>;
  upsert?: Maybe<OrganizationUpsertWithoutModelsetsInput>;
  connect?: Maybe<OrganizationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrganizationUpdateWithoutModelsetsInput>;
};

export type ArtifactUpdateManyWithoutModelsetInput = {
  create?: Maybe<Array<ArtifactCreateWithoutModelsetInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutModelsetInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutModelsetInput>>;
  createMany?: Maybe<ArtifactCreateManyModelsetInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutModelsetInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutModelsetInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
};

export type UserUpdateManyWithoutContributedModelSetsInput = {
  create?: Maybe<Array<UserCreateWithoutContributedModelSetsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutContributedModelSetsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutContributedModelSetsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutContributedModelSetsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutContributedModelSetsInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type PropertyUpdateManyWithoutModelsetsInput = {
  create?: Maybe<Array<PropertyCreateWithoutModelsetsInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutModelsetsInput>>;
  upsert?: Maybe<Array<PropertyUpsertWithWhereUniqueWithoutModelsetsInput>>;
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  set?: Maybe<Array<PropertyWhereUniqueInput>>;
  disconnect?: Maybe<Array<PropertyWhereUniqueInput>>;
  delete?: Maybe<Array<PropertyWhereUniqueInput>>;
  update?: Maybe<Array<PropertyUpdateWithWhereUniqueWithoutModelsetsInput>>;
  updateMany?: Maybe<Array<PropertyUpdateManyWithWhereWithoutModelsetsInput>>;
  deleteMany?: Maybe<Array<PropertyScalarWhereInput>>;
};

export type ModelsetListRelationFilter = {
  every?: Maybe<ModelsetWhereInput>;
  some?: Maybe<ModelsetWhereInput>;
  none?: Maybe<ModelsetWhereInput>;
};

export type ModelsetCreateNestedManyWithoutPropertiesInput = {
  create?: Maybe<Array<ModelsetCreateWithoutPropertiesInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutPropertiesInput>>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
};

export type ModelsetUpdateManyWithoutPropertiesInput = {
  create?: Maybe<Array<ModelsetCreateWithoutPropertiesInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutPropertiesInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutPropertiesInput>>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutPropertiesInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type ArtifactUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<ArtifactCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<ArtifactCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
};

export type DescriptorUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<DescriptorCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DescriptorCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<DescriptorUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<DescriptorCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<DescriptorWhereUniqueInput>>;
  set?: Maybe<Array<DescriptorWhereUniqueInput>>;
  disconnect?: Maybe<Array<DescriptorWhereUniqueInput>>;
  delete?: Maybe<Array<DescriptorWhereUniqueInput>>;
  update?: Maybe<Array<DescriptorUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DescriptorUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<DescriptorScalarWhereInput>>;
};

export type MethodUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<MethodCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<MethodCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<MethodUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<MethodCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<MethodWhereUniqueInput>>;
  set?: Maybe<Array<MethodWhereUniqueInput>>;
  disconnect?: Maybe<Array<MethodWhereUniqueInput>>;
  delete?: Maybe<Array<MethodWhereUniqueInput>>;
  update?: Maybe<Array<MethodUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<MethodUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<MethodScalarWhereInput>>;
};

export type ModelsetUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<ModelsetCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<ModelsetCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
};

export type OrganizationUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<OrganizationCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<OrganizationCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
};

export type PropertyUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<PropertyCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<PropertyUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<PropertyCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
  set?: Maybe<Array<PropertyWhereUniqueInput>>;
  disconnect?: Maybe<Array<PropertyWhereUniqueInput>>;
  delete?: Maybe<Array<PropertyWhereUniqueInput>>;
  update?: Maybe<Array<PropertyUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<PropertyUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<PropertyScalarWhereInput>>;
};

export type ModelsetUpdateManyWithoutContributorsInput = {
  create?: Maybe<Array<ModelsetCreateWithoutContributorsInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutContributorsInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutContributorsInput>>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutContributorsInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutContributorsInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
};

export type OrganizationUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<OrganizationCreateWithoutMembersInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutMembersInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueWithoutMembersInput>>;
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereWithoutMembersInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type OrganizationOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  hashedPW?: Maybe<StringNullableFilter>;
  apiKey?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  artifacts?: Maybe<ArtifactListRelationFilter>;
  descriptors?: Maybe<DescriptorListRelationFilter>;
  methods?: Maybe<MethodListRelationFilter>;
  modelsets?: Maybe<ModelsetListRelationFilter>;
  organizations?: Maybe<OrganizationListRelationFilter>;
  properties?: Maybe<PropertyListRelationFilter>;
  contributedModelSets?: Maybe<ModelsetListRelationFilter>;
  joinedOrganizations?: Maybe<OrganizationListRelationFilter>;
};

export type OrganizationCreateWithoutModelsetsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
};

export type OrganizationCreateOrConnectWithoutModelsetsInput = {
  where: OrganizationWhereUniqueInput;
  create: OrganizationCreateWithoutModelsetsInput;
};

export type ArtifactCreateWithoutModelsetInput = {
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutArtifactsInput>;
};

export type ArtifactCreateOrConnectWithoutModelsetInput = {
  where: ArtifactWhereUniqueInput;
  create: ArtifactCreateWithoutModelsetInput;
};

export type ArtifactCreateManyModelsetInputEnvelope = {
  data?: Maybe<Array<ArtifactCreateManyModelsetInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateWithoutContributedModelSetsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  hashedPW?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOwnerInput>;
  descriptors?: Maybe<DescriptorCreateNestedManyWithoutOwnerInput>;
  methods?: Maybe<MethodCreateNestedManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOwnerInput>;
  organizations?: Maybe<OrganizationCreateNestedManyWithoutOwnerInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutOwnerInput>;
  joinedOrganizations?: Maybe<OrganizationCreateNestedManyWithoutMembersInput>;
};

export type UserCreateOrConnectWithoutContributedModelSetsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutContributedModelSetsInput;
};

export type PropertyCreateWithoutModelsetsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyCreateOrConnectWithoutModelsetsInput = {
  where: PropertyWhereUniqueInput;
  create: PropertyCreateWithoutModelsetsInput;
};

export type OrganizationUpsertWithoutModelsetsInput = {
  update: OrganizationUpdateWithoutModelsetsInput;
  create: OrganizationCreateWithoutModelsetsInput;
};

export type OrganizationUpdateWithoutModelsetsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
};

export type ArtifactUpsertWithWhereUniqueWithoutModelsetInput = {
  where: ArtifactWhereUniqueInput;
  update: ArtifactUpdateWithoutModelsetInput;
  create: ArtifactCreateWithoutModelsetInput;
};

export type ArtifactUpdateWithWhereUniqueWithoutModelsetInput = {
  where: ArtifactWhereUniqueInput;
  data: ArtifactUpdateWithoutModelsetInput;
};

export type ArtifactUpdateManyWithWhereWithoutModelsetInput = {
  where: ArtifactScalarWhereInput;
  data: ArtifactUpdateManyMutationInput;
};

export type ArtifactScalarWhereInput = {
  AND?: Maybe<Array<ArtifactScalarWhereInput>>;
  OR?: Maybe<Array<ArtifactScalarWhereInput>>;
  NOT?: Maybe<Array<ArtifactScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  path?: Maybe<StringFilter>;
  etag?: Maybe<StringFilter>;
  filename?: Maybe<StringFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntFilter>;
  setId?: Maybe<IntNullableFilter>;
};

export type UserUpsertWithWhereUniqueWithoutContributedModelSetsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutContributedModelSetsInput;
  create: UserCreateWithoutContributedModelSetsInput;
};

export type UserUpdateWithWhereUniqueWithoutContributedModelSetsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutContributedModelSetsInput;
};

export type UserUpdateManyWithWhereWithoutContributedModelSetsInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  hashedPW?: Maybe<StringNullableFilter>;
  apiKey?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
};

export type PropertyUpsertWithWhereUniqueWithoutModelsetsInput = {
  where: PropertyWhereUniqueInput;
  update: PropertyUpdateWithoutModelsetsInput;
  create: PropertyCreateWithoutModelsetsInput;
};

export type PropertyUpdateWithWhereUniqueWithoutModelsetsInput = {
  where: PropertyWhereUniqueInput;
  data: PropertyUpdateWithoutModelsetsInput;
};

export type PropertyUpdateManyWithWhereWithoutModelsetsInput = {
  where: PropertyScalarWhereInput;
  data: PropertyUpdateManyMutationInput;
};

export type PropertyScalarWhereInput = {
  AND?: Maybe<Array<PropertyScalarWhereInput>>;
  OR?: Maybe<Array<PropertyScalarWhereInput>>;
  NOT?: Maybe<Array<PropertyScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  symbol?: Maybe<StringNullableFilter>;
  unit?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type ModelsetCreateWithoutPropertiesInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
};

export type ModelsetCreateOrConnectWithoutPropertiesInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutPropertiesInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutPropertiesInput = {
  where: ModelsetWhereUniqueInput;
  update: ModelsetUpdateWithoutPropertiesInput;
  create: ModelsetCreateWithoutPropertiesInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutPropertiesInput = {
  where: ModelsetWhereUniqueInput;
  data: ModelsetUpdateWithoutPropertiesInput;
};

export type ModelsetUpdateManyWithWhereWithoutPropertiesInput = {
  where: ModelsetScalarWhereInput;
  data: ModelsetUpdateManyMutationInput;
};

export type ModelsetScalarWhereInput = {
  AND?: Maybe<Array<ModelsetScalarWhereInput>>;
  OR?: Maybe<Array<ModelsetScalarWhereInput>>;
  NOT?: Maybe<Array<ModelsetScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  keywords?: Maybe<StringNullableFilter>;
  private?: Maybe<BoolFilter>;
  sampleCode?: Maybe<StringNullableFilter>;
  deprecated?: Maybe<BoolFilter>;
  organizationId?: Maybe<IntNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type ArtifactCreateWithoutOwnerInput = {
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutArtifactsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutArtifactsInput>;
};

export type ArtifactCreateOrConnectWithoutOwnerInput = {
  where: ArtifactWhereUniqueInput;
  create: ArtifactCreateWithoutOwnerInput;
};

export type ArtifactUpsertWithWhereUniqueWithoutOwnerInput = {
  where: ArtifactWhereUniqueInput;
  update: ArtifactUpdateWithoutOwnerInput;
  create: ArtifactCreateWithoutOwnerInput;
};

export type ArtifactCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<ArtifactCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ArtifactUpdateWithWhereUniqueWithoutOwnerInput = {
  where: ArtifactWhereUniqueInput;
  data: ArtifactUpdateWithoutOwnerInput;
};

export type ArtifactUpdateManyWithWhereWithoutOwnerInput = {
  where: ArtifactScalarWhereInput;
  data: ArtifactUpdateManyMutationInput;
};

export type DescriptorCreateWithoutOwnerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DescriptorCreateOrConnectWithoutOwnerInput = {
  where: DescriptorWhereUniqueInput;
  create: DescriptorCreateWithoutOwnerInput;
};

export type DescriptorUpsertWithWhereUniqueWithoutOwnerInput = {
  where: DescriptorWhereUniqueInput;
  update: DescriptorUpdateWithoutOwnerInput;
  create: DescriptorCreateWithoutOwnerInput;
};

export type DescriptorCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<DescriptorCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type DescriptorUpdateWithWhereUniqueWithoutOwnerInput = {
  where: DescriptorWhereUniqueInput;
  data: DescriptorUpdateWithoutOwnerInput;
};

export type DescriptorUpdateManyWithWhereWithoutOwnerInput = {
  where: DescriptorScalarWhereInput;
  data: DescriptorUpdateManyMutationInput;
};

export type DescriptorScalarWhereInput = {
  AND?: Maybe<Array<DescriptorScalarWhereInput>>;
  OR?: Maybe<Array<DescriptorScalarWhereInput>>;
  NOT?: Maybe<Array<DescriptorScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type MethodCreateWithoutOwnerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MethodCreateOrConnectWithoutOwnerInput = {
  where: MethodWhereUniqueInput;
  create: MethodCreateWithoutOwnerInput;
};

export type MethodUpsertWithWhereUniqueWithoutOwnerInput = {
  where: MethodWhereUniqueInput;
  update: MethodUpdateWithoutOwnerInput;
  create: MethodCreateWithoutOwnerInput;
};

export type MethodCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<MethodCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MethodUpdateWithWhereUniqueWithoutOwnerInput = {
  where: MethodWhereUniqueInput;
  data: MethodUpdateWithoutOwnerInput;
};

export type MethodUpdateManyWithWhereWithoutOwnerInput = {
  where: MethodScalarWhereInput;
  data: MethodUpdateManyMutationInput;
};

export type MethodScalarWhereInput = {
  AND?: Maybe<Array<MethodScalarWhereInput>>;
  OR?: Maybe<Array<MethodScalarWhereInput>>;
  NOT?: Maybe<Array<MethodScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type ModelsetCreateWithoutOwnerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetCreateOrConnectWithoutOwnerInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutOwnerInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutOwnerInput = {
  where: ModelsetWhereUniqueInput;
  update: ModelsetUpdateWithoutOwnerInput;
  create: ModelsetCreateWithoutOwnerInput;
};

export type ModelsetCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<ModelsetCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModelsetUpdateWithWhereUniqueWithoutOwnerInput = {
  where: ModelsetWhereUniqueInput;
  data: ModelsetUpdateWithoutOwnerInput;
};

export type ModelsetUpdateManyWithWhereWithoutOwnerInput = {
  where: ModelsetScalarWhereInput;
  data: ModelsetUpdateManyMutationInput;
};

export type OrganizationCreateWithoutOwnerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
};

export type OrganizationCreateOrConnectWithoutOwnerInput = {
  where: OrganizationWhereUniqueInput;
  create: OrganizationCreateWithoutOwnerInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
  where: OrganizationWhereUniqueInput;
  update: OrganizationUpdateWithoutOwnerInput;
  create: OrganizationCreateWithoutOwnerInput;
};

export type OrganizationCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<OrganizationCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
  where: OrganizationWhereUniqueInput;
  data: OrganizationUpdateWithoutOwnerInput;
};

export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
  where: OrganizationScalarWhereInput;
  data: OrganizationUpdateManyMutationInput;
};

export type OrganizationScalarWhereInput = {
  AND?: Maybe<Array<OrganizationScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationScalarWhereInput>>;
  NOT?: Maybe<Array<OrganizationScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  ownerId?: Maybe<IntNullableFilter>;
};

export type PropertyCreateWithoutOwnerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
};

export type PropertyCreateOrConnectWithoutOwnerInput = {
  where: PropertyWhereUniqueInput;
  create: PropertyCreateWithoutOwnerInput;
};

export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
  where: PropertyWhereUniqueInput;
  update: PropertyUpdateWithoutOwnerInput;
  create: PropertyCreateWithoutOwnerInput;
};

export type PropertyCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<PropertyCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
  where: PropertyWhereUniqueInput;
  data: PropertyUpdateWithoutOwnerInput;
};

export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
  where: PropertyScalarWhereInput;
  data: PropertyUpdateManyMutationInput;
};

export type ModelsetCreateWithoutContributorsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetCreateOrConnectWithoutContributorsInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutContributorsInput;
};

export type ModelsetUpsertWithWhereUniqueWithoutContributorsInput = {
  where: ModelsetWhereUniqueInput;
  update: ModelsetUpdateWithoutContributorsInput;
  create: ModelsetCreateWithoutContributorsInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutContributorsInput = {
  where: ModelsetWhereUniqueInput;
  data: ModelsetUpdateWithoutContributorsInput;
};

export type ModelsetUpdateManyWithWhereWithoutContributorsInput = {
  where: ModelsetScalarWhereInput;
  data: ModelsetUpdateManyMutationInput;
};

export type OrganizationCreateWithoutMembersInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOrganizationInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
};

export type OrganizationCreateOrConnectWithoutMembersInput = {
  where: OrganizationWhereUniqueInput;
  create: OrganizationCreateWithoutMembersInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutMembersInput = {
  where: OrganizationWhereUniqueInput;
  update: OrganizationUpdateWithoutMembersInput;
  create: OrganizationCreateWithoutMembersInput;
};

export type OrganizationUpdateWithWhereUniqueWithoutMembersInput = {
  where: OrganizationWhereUniqueInput;
  data: OrganizationUpdateWithoutMembersInput;
};

export type OrganizationUpdateManyWithWhereWithoutMembersInput = {
  where: OrganizationScalarWhereInput;
  data: OrganizationUpdateManyMutationInput;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type DescriptorListRelationFilter = {
  every?: Maybe<DescriptorWhereInput>;
  some?: Maybe<DescriptorWhereInput>;
  none?: Maybe<DescriptorWhereInput>;
};

export type MethodListRelationFilter = {
  every?: Maybe<MethodWhereInput>;
  some?: Maybe<MethodWhereInput>;
  none?: Maybe<MethodWhereInput>;
};

export type OrganizationListRelationFilter = {
  every?: Maybe<OrganizationWhereInput>;
  some?: Maybe<OrganizationWhereInput>;
  none?: Maybe<OrganizationWhereInput>;
};

export type ArtifactCreateNestedManyWithoutOrganizationInput = {
  create?: Maybe<Array<ArtifactCreateWithoutOrganizationInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOrganizationInput>>;
  createMany?: Maybe<ArtifactCreateManyOrganizationInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutJoinedOrganizationsInput = {
  create?: Maybe<Array<UserCreateWithoutJoinedOrganizationsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutJoinedOrganizationsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type ModelCreateNestedOneWithoutArtifactInput = {
  create?: Maybe<ModelCreateWithoutArtifactInput>;
  connectOrCreate?: Maybe<ModelCreateOrConnectWithoutArtifactInput>;
  connect?: Maybe<ModelWhereUniqueInput>;
};

export type OrganizationCreateNestedOneWithoutArtifactsInput = {
  create?: Maybe<OrganizationCreateWithoutArtifactsInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutArtifactsInput>;
  connect?: Maybe<OrganizationWhereUniqueInput>;
};

export type ArtifactCreateManyModelsetInput = {
  id?: Maybe<Scalars['Int']>;
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  organizationId?: Maybe<Scalars['Int']>;
  ownerId: Scalars['Int'];
};

export type ArtifactCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<ArtifactCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<ArtifactCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
};

export type DescriptorCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<DescriptorCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DescriptorCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<DescriptorCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<DescriptorWhereUniqueInput>>;
};

export type MethodCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<MethodCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<MethodCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<MethodCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<MethodWhereUniqueInput>>;
};

export type ModelsetCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<ModelsetCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<ModelsetCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
};

export type OrganizationCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<OrganizationCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<OrganizationCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
};

export type PropertyCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<PropertyCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<PropertyCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<PropertyCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<PropertyWhereUniqueInput>>;
};

export type OrganizationCreateNestedManyWithoutMembersInput = {
  create?: Maybe<Array<OrganizationCreateWithoutMembersInput>>;
  connectOrCreate?: Maybe<Array<OrganizationCreateOrConnectWithoutMembersInput>>;
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
};

export type ArtifactUpdateManyWithoutOrganizationInput = {
  create?: Maybe<Array<ArtifactCreateWithoutOrganizationInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutOrganizationInput>>;
  upsert?: Maybe<Array<ArtifactUpsertWithWhereUniqueWithoutOrganizationInput>>;
  createMany?: Maybe<ArtifactCreateManyOrganizationInputEnvelope>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  set?: Maybe<Array<ArtifactWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  delete?: Maybe<Array<ArtifactWhereUniqueInput>>;
  update?: Maybe<Array<ArtifactUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: Maybe<Array<ArtifactUpdateManyWithWhereWithoutOrganizationInput>>;
  deleteMany?: Maybe<Array<ArtifactScalarWhereInput>>;
};

export type UserUpdateManyWithoutJoinedOrganizationsInput = {
  create?: Maybe<Array<UserCreateWithoutJoinedOrganizationsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutJoinedOrganizationsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutJoinedOrganizationsInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type ArtifactUpdateWithoutModelsetInput = {
  path?: Maybe<StringFieldUpdateOperationsInput>;
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutArtifactsInput>;
};

export type ArtifactUpdateManyMutationInput = {
  path?: Maybe<StringFieldUpdateOperationsInput>;
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutContributedModelSetsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  joinedOrganizations?: Maybe<OrganizationUpdateManyWithoutMembersInput>;
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutModelsetsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutPropertiesInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
};

export type ModelsetUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type ModelsetCreateNestedOneWithoutArtifactsInput = {
  create?: Maybe<ModelsetCreateWithoutArtifactsInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutArtifactsInput>;
  connect?: Maybe<ModelsetWhereUniqueInput>;
};

export type ArtifactUpdateWithoutOwnerInput = {
  path?: Maybe<StringFieldUpdateOperationsInput>;
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutArtifactsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutArtifactsInput>;
};

export type ArtifactCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  organizationId?: Maybe<Scalars['Int']>;
  setId?: Maybe<Scalars['Int']>;
};

export type DescriptorUpdateWithoutOwnerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type DescriptorCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DescriptorUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type MethodUpdateWithoutOwnerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type MethodCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MethodUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModelsetUpdateWithoutOwnerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type ModelsetCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organizationId?: Maybe<Scalars['Int']>;
};

export type ModelsetCreateNestedManyWithoutOrganizationInput = {
  create?: Maybe<Array<ModelsetCreateWithoutOrganizationInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOrganizationInput>>;
  createMany?: Maybe<ModelsetCreateManyOrganizationInputEnvelope>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
};

export type OrganizationUpdateWithoutOwnerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
};

export type OrganizationCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type OrganizationUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutOwnerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
};

export type PropertyCreateManyOwnerInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type ModelsetUpdateWithoutContributorsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type OrganizationUpdateWithoutMembersInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOrganizationInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type ArtifactCreateWithoutOrganizationInput = {
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  model?: Maybe<ModelCreateNestedOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutArtifactsInput>;
};

export type ArtifactCreateOrConnectWithoutOrganizationInput = {
  where: ArtifactWhereUniqueInput;
  create: ArtifactCreateWithoutOrganizationInput;
};

export type ArtifactCreateManyOrganizationInputEnvelope = {
  data?: Maybe<Array<ArtifactCreateManyOrganizationInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateWithoutJoinedOrganizationsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  hashedPW?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutOwnerInput>;
  descriptors?: Maybe<DescriptorCreateNestedManyWithoutOwnerInput>;
  methods?: Maybe<MethodCreateNestedManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOwnerInput>;
  organizations?: Maybe<OrganizationCreateNestedManyWithoutOwnerInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetCreateNestedManyWithoutContributorsInput>;
};

export type UserCreateOrConnectWithoutJoinedOrganizationsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutJoinedOrganizationsInput;
};

export type ModelCreateWithoutArtifactInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  succeed?: Maybe<Scalars['Boolean']>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  downloads?: Maybe<Scalars['Int']>;
  descriptor?: Maybe<DescriptorCreateNestedOneWithoutModelsInput>;
  method?: Maybe<MethodCreateNestedOneWithoutModelsInput>;
  property?: Maybe<PropertyCreateNestedOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetCreateNestedOneWithoutModelsInput>;
  clsMetric?: Maybe<ClassificationMetricCreateNestedOneWithoutModelInput>;
  regMetric?: Maybe<RegressionMetricCreateNestedOneWithoutModelInput>;
};

export type ModelCreateOrConnectWithoutArtifactInput = {
  where: ModelWhereUniqueInput;
  create: ModelCreateWithoutArtifactInput;
};

export type OrganizationCreateWithoutArtifactsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutOrganizationInput>;
  members?: Maybe<UserCreateNestedManyWithoutJoinedOrganizationsInput>;
};

export type OrganizationCreateOrConnectWithoutArtifactsInput = {
  where: OrganizationWhereUniqueInput;
  create: OrganizationCreateWithoutArtifactsInput;
};

export type ArtifactUpsertWithWhereUniqueWithoutOrganizationInput = {
  where: ArtifactWhereUniqueInput;
  update: ArtifactUpdateWithoutOrganizationInput;
  create: ArtifactCreateWithoutOrganizationInput;
};

export type ArtifactUpdateWithWhereUniqueWithoutOrganizationInput = {
  where: ArtifactWhereUniqueInput;
  data: ArtifactUpdateWithoutOrganizationInput;
};

export type ArtifactUpdateManyWithWhereWithoutOrganizationInput = {
  where: ArtifactScalarWhereInput;
  data: ArtifactUpdateManyMutationInput;
};

export type UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutJoinedOrganizationsInput;
  create: UserCreateWithoutJoinedOrganizationsInput;
};

export type UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutJoinedOrganizationsInput;
};

export type UserUpdateManyWithWhereWithoutJoinedOrganizationsInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type ModelUpdateOneWithoutArtifactInput = {
  create?: Maybe<ModelCreateWithoutArtifactInput>;
  connectOrCreate?: Maybe<ModelCreateOrConnectWithoutArtifactInput>;
  upsert?: Maybe<ModelUpsertWithoutArtifactInput>;
  connect?: Maybe<ModelWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelUpdateWithoutArtifactInput>;
};

export type OrganizationUpdateOneWithoutArtifactsInput = {
  create?: Maybe<OrganizationCreateWithoutArtifactsInput>;
  connectOrCreate?: Maybe<OrganizationCreateOrConnectWithoutArtifactsInput>;
  upsert?: Maybe<OrganizationUpsertWithoutArtifactsInput>;
  connect?: Maybe<OrganizationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrganizationUpdateWithoutArtifactsInput>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type ModelsetCreateWithoutArtifactsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetCreateOrConnectWithoutArtifactsInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutArtifactsInput;
};

export type ModelsetUpdateOneWithoutArtifactsInput = {
  create?: Maybe<ModelsetCreateWithoutArtifactsInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutArtifactsInput>;
  upsert?: Maybe<ModelsetUpsertWithoutArtifactsInput>;
  connect?: Maybe<ModelsetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelsetUpdateWithoutArtifactsInput>;
};

export type ModelsetCreateWithoutOrganizationInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetCreateOrConnectWithoutOrganizationInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutOrganizationInput;
};

export type ModelsetCreateManyOrganizationInputEnvelope = {
  data?: Maybe<Array<ModelsetCreateManyOrganizationInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModelsetUpdateManyWithoutOrganizationInput = {
  create?: Maybe<Array<ModelsetCreateWithoutOrganizationInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutOrganizationInput>>;
  upsert?: Maybe<Array<ModelsetUpsertWithWhereUniqueWithoutOrganizationInput>>;
  createMany?: Maybe<ModelsetCreateManyOrganizationInputEnvelope>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  set?: Maybe<Array<ModelsetWhereUniqueInput>>;
  disconnect?: Maybe<Array<ModelsetWhereUniqueInput>>;
  delete?: Maybe<Array<ModelsetWhereUniqueInput>>;
  update?: Maybe<Array<ModelsetUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: Maybe<Array<ModelsetUpdateManyWithWhereWithoutOrganizationInput>>;
  deleteMany?: Maybe<Array<ModelsetScalarWhereInput>>;
};

export type ArtifactCreateManyOrganizationInput = {
  id?: Maybe<Scalars['Int']>;
  path: Scalars['String'];
  etag: Scalars['String'];
  filename: Scalars['String'];
  ownerId: Scalars['Int'];
  setId?: Maybe<Scalars['Int']>;
};

export type ModelsetCreateNestedManyWithoutContributorsInput = {
  create?: Maybe<Array<ModelsetCreateWithoutContributorsInput>>;
  connectOrCreate?: Maybe<Array<ModelsetCreateOrConnectWithoutContributorsInput>>;
  connect?: Maybe<Array<ModelsetWhereUniqueInput>>;
};

export type DescriptorCreateNestedOneWithoutModelsInput = {
  create?: Maybe<DescriptorCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<DescriptorCreateOrConnectWithoutModelsInput>;
  connect?: Maybe<DescriptorWhereUniqueInput>;
};

export type MethodCreateNestedOneWithoutModelsInput = {
  create?: Maybe<MethodCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<MethodCreateOrConnectWithoutModelsInput>;
  connect?: Maybe<MethodWhereUniqueInput>;
};

export type PropertyCreateNestedOneWithoutModelsInput = {
  create?: Maybe<PropertyCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<PropertyCreateOrConnectWithoutModelsInput>;
  connect?: Maybe<PropertyWhereUniqueInput>;
};

export type ModelsetCreateNestedOneWithoutModelsInput = {
  create?: Maybe<ModelsetCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutModelsInput>;
  connect?: Maybe<ModelsetWhereUniqueInput>;
};

export type ClassificationMetricCreateNestedOneWithoutModelInput = {
  create?: Maybe<ClassificationMetricCreateWithoutModelInput>;
  connectOrCreate?: Maybe<ClassificationMetricCreateOrConnectWithoutModelInput>;
  connect?: Maybe<ClassificationMetricWhereUniqueInput>;
};

export type RegressionMetricCreateNestedOneWithoutModelInput = {
  create?: Maybe<RegressionMetricCreateWithoutModelInput>;
  connectOrCreate?: Maybe<RegressionMetricCreateOrConnectWithoutModelInput>;
  connect?: Maybe<RegressionMetricWhereUniqueInput>;
};

export type ArtifactUpdateWithoutOrganizationInput = {
  path?: Maybe<StringFieldUpdateOperationsInput>;
  etag?: Maybe<StringFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  model?: Maybe<ModelUpdateOneWithoutArtifactInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutArtifactsInput>;
};

export type UserUpdateWithoutJoinedOrganizationsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  hashedPW?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apiKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutOwnerInput>;
  descriptors?: Maybe<DescriptorUpdateManyWithoutOwnerInput>;
  methods?: Maybe<MethodUpdateManyWithoutOwnerInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOwnerInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutOwnerInput>;
  properties?: Maybe<PropertyUpdateManyWithoutOwnerInput>;
  contributedModelSets?: Maybe<ModelsetUpdateManyWithoutContributorsInput>;
};

export type ModelUpsertWithoutArtifactInput = {
  update: ModelUpdateWithoutArtifactInput;
  create: ModelCreateWithoutArtifactInput;
};

export type ModelUpdateWithoutArtifactInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  succeed?: Maybe<BoolFieldUpdateOperationsInput>;
  trainingEnv?: Maybe<Scalars['Json']>;
  trainingInfo?: Maybe<Scalars['Json']>;
  downloads?: Maybe<NullableIntFieldUpdateOperationsInput>;
  descriptor?: Maybe<DescriptorUpdateOneWithoutModelsInput>;
  method?: Maybe<MethodUpdateOneWithoutModelsInput>;
  property?: Maybe<PropertyUpdateOneWithoutModelsInput>;
  modelset?: Maybe<ModelsetUpdateOneWithoutModelsInput>;
  clsMetric?: Maybe<ClassificationMetricUpdateOneWithoutModelInput>;
  regMetric?: Maybe<RegressionMetricUpdateOneWithoutModelInput>;
};

export type OrganizationUpsertWithoutArtifactsInput = {
  update: OrganizationUpdateWithoutArtifactsInput;
  create: OrganizationCreateWithoutArtifactsInput;
};

export type OrganizationUpdateWithoutArtifactsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutOrganizationInput>;
  members?: Maybe<UserUpdateManyWithoutJoinedOrganizationsInput>;
};

export type ModelsetUpsertWithoutArtifactsInput = {
  update: ModelsetUpdateWithoutArtifactsInput;
  create: ModelsetCreateWithoutArtifactsInput;
};

export type ModelsetUpdateWithoutArtifactsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type ModelsetCreateManyOrganizationInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  ownerId?: Maybe<Scalars['Int']>;
};

export type ModelsetUpsertWithWhereUniqueWithoutOrganizationInput = {
  where: ModelsetWhereUniqueInput;
  update: ModelsetUpdateWithoutOrganizationInput;
  create: ModelsetCreateWithoutOrganizationInput;
};

export type ModelsetUpdateWithWhereUniqueWithoutOrganizationInput = {
  where: ModelsetWhereUniqueInput;
  data: ModelsetUpdateWithoutOrganizationInput;
};

export type ModelsetUpdateManyWithWhereWithoutOrganizationInput = {
  where: ModelsetScalarWhereInput;
  data: ModelsetUpdateManyMutationInput;
};

export type DescriptorCreateWithoutModelsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DescriptorCreateOrConnectWithoutModelsInput = {
  where: DescriptorWhereUniqueInput;
  create: DescriptorCreateWithoutModelsInput;
};

export type MethodCreateWithoutModelsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MethodCreateOrConnectWithoutModelsInput = {
  where: MethodWhereUniqueInput;
  create: MethodCreateWithoutModelsInput;
};

export type PropertyCreateWithoutModelsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  modelsets?: Maybe<ModelsetCreateNestedManyWithoutPropertiesInput>;
};

export type PropertyCreateOrConnectWithoutModelsInput = {
  where: PropertyWhereUniqueInput;
  create: PropertyCreateWithoutModelsInput;
};

export type ModelsetCreateWithoutModelsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  sampleCode?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationCreateNestedOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactCreateNestedManyWithoutModelsetInput>;
  contributors?: Maybe<UserCreateNestedManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyCreateNestedManyWithoutModelsetsInput>;
};

export type ModelsetCreateOrConnectWithoutModelsInput = {
  where: ModelsetWhereUniqueInput;
  create: ModelsetCreateWithoutModelsInput;
};

export type ClassificationMetricCreateWithoutModelInput = {
  accuracy?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  recall?: Maybe<Scalars['Float']>;
  f1?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  prevalence?: Maybe<Scalars['Float']>;
  specificity?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  npv?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type ClassificationMetricCreateOrConnectWithoutModelInput = {
  where: ClassificationMetricWhereUniqueInput;
  create: ClassificationMetricCreateWithoutModelInput;
};

export type ClassificationMetricWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type RegressionMetricCreateWithoutModelInput = {
  meanAbsError?: Maybe<Scalars['Float']>;
  maxAbsError?: Maybe<Scalars['Float']>;
  meanSquareError?: Maybe<Scalars['Float']>;
  rootMeanSquareError?: Maybe<Scalars['Float']>;
  r2?: Maybe<Scalars['Float']>;
  pValue?: Maybe<Scalars['Float']>;
  spearmanCorr?: Maybe<Scalars['Float']>;
  pearsonCorr?: Maybe<Scalars['Float']>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricCreateOrConnectWithoutModelInput = {
  where: RegressionMetricWhereUniqueInput;
  create: RegressionMetricCreateWithoutModelInput;
};

export type RegressionMetricWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type DescriptorUpdateOneWithoutModelsInput = {
  create?: Maybe<DescriptorCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<DescriptorCreateOrConnectWithoutModelsInput>;
  upsert?: Maybe<DescriptorUpsertWithoutModelsInput>;
  connect?: Maybe<DescriptorWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DescriptorUpdateWithoutModelsInput>;
};

export type MethodUpdateOneWithoutModelsInput = {
  create?: Maybe<MethodCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<MethodCreateOrConnectWithoutModelsInput>;
  upsert?: Maybe<MethodUpsertWithoutModelsInput>;
  connect?: Maybe<MethodWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MethodUpdateWithoutModelsInput>;
};

export type PropertyUpdateOneWithoutModelsInput = {
  create?: Maybe<PropertyCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<PropertyCreateOrConnectWithoutModelsInput>;
  upsert?: Maybe<PropertyUpsertWithoutModelsInput>;
  connect?: Maybe<PropertyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PropertyUpdateWithoutModelsInput>;
};

export type ModelsetUpdateOneWithoutModelsInput = {
  create?: Maybe<ModelsetCreateWithoutModelsInput>;
  connectOrCreate?: Maybe<ModelsetCreateOrConnectWithoutModelsInput>;
  upsert?: Maybe<ModelsetUpsertWithoutModelsInput>;
  connect?: Maybe<ModelsetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModelsetUpdateWithoutModelsInput>;
};

export type ClassificationMetricUpdateOneWithoutModelInput = {
  create?: Maybe<ClassificationMetricCreateWithoutModelInput>;
  connectOrCreate?: Maybe<ClassificationMetricCreateOrConnectWithoutModelInput>;
  upsert?: Maybe<ClassificationMetricUpsertWithoutModelInput>;
  connect?: Maybe<ClassificationMetricWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClassificationMetricUpdateWithoutModelInput>;
};

export type RegressionMetricUpdateOneWithoutModelInput = {
  create?: Maybe<RegressionMetricCreateWithoutModelInput>;
  connectOrCreate?: Maybe<RegressionMetricCreateOrConnectWithoutModelInput>;
  upsert?: Maybe<RegressionMetricUpsertWithoutModelInput>;
  connect?: Maybe<RegressionMetricWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RegressionMetricUpdateWithoutModelInput>;
};

export type ModelsetUpdateWithoutOrganizationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type DescriptorUpsertWithoutModelsInput = {
  update: DescriptorUpdateWithoutModelsInput;
  create: DescriptorCreateWithoutModelsInput;
};

export type DescriptorUpdateWithoutModelsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type MethodUpsertWithoutModelsInput = {
  update: MethodUpdateWithoutModelsInput;
  create: MethodCreateWithoutModelsInput;
};

export type MethodUpdateWithoutModelsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyUpsertWithoutModelsInput = {
  update: PropertyUpdateWithoutModelsInput;
  create: PropertyCreateWithoutModelsInput;
};

export type PropertyUpdateWithoutModelsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  symbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  unit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modelsets?: Maybe<ModelsetUpdateManyWithoutPropertiesInput>;
};

export type ModelsetUpsertWithoutModelsInput = {
  update: ModelsetUpdateWithoutModelsInput;
  create: ModelsetCreateWithoutModelsInput;
};

export type ModelsetUpdateWithoutModelsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  sampleCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deprecated?: Maybe<BoolFieldUpdateOperationsInput>;
  organization?: Maybe<OrganizationUpdateOneWithoutModelsetsInput>;
  artifacts?: Maybe<ArtifactUpdateManyWithoutModelsetInput>;
  contributors?: Maybe<UserUpdateManyWithoutContributedModelSetsInput>;
  properties?: Maybe<PropertyUpdateManyWithoutModelsetsInput>;
};

export type ClassificationMetricUpsertWithoutModelInput = {
  update: ClassificationMetricUpdateWithoutModelInput;
  create: ClassificationMetricCreateWithoutModelInput;
};

export type ClassificationMetricUpdateWithoutModelInput = {
  accuracy?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precision?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  recall?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  f1?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  sensitivity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  prevalence?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  specificity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  ppv?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  npv?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type RegressionMetricUpsertWithoutModelInput = {
  update: RegressionMetricUpdateWithoutModelInput;
  create: RegressionMetricCreateWithoutModelInput;
};

export type RegressionMetricUpdateWithoutModelInput = {
  meanAbsError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  maxAbsError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  meanSquareError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  rootMeanSquareError?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  r2?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  pValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  spearmanCorr?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  pearsonCorr?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplementary?: Maybe<Scalars['Json']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadArtifact: Artifact;
  createOneDescriptor: Descriptor;
  updateOneDescriptor?: Maybe<Descriptor>;
  deleteOneDescriptor?: Maybe<Descriptor>;
  createOneMethod: Method;
  updateOneMethod?: Maybe<Method>;
  deleteOneMethod?: Maybe<Method>;
  deleteManyModel: AffectedRowsOutput;
  /** Upload a model to MDL server */
  uploadModel: Model;
  createOneModelset: Modelset;
  updateOneModelset?: Maybe<Modelset>;
  deleteOneModelset?: Maybe<Modelset>;
  createOneProperty: Property;
  updateOneProperty?: Maybe<Property>;
  deleteOneProperty?: Maybe<Property>;
  updateOneUser?: Maybe<User>;
  changePassword: Scalars['Boolean'];
};


export type MutationUploadArtifactArgs = {
  file: Scalars['Upload'];
  organizationId?: Maybe<Scalars['Int']>;
  modelsetId?: Maybe<Scalars['Int']>;
};


export type MutationCreateOneDescriptorArgs = {
  data: DescriptorCreateInput;
};


export type MutationUpdateOneDescriptorArgs = {
  data: DescriptorUpdateInput;
  where: DescriptorWhereUniqueInput;
};


export type MutationDeleteOneDescriptorArgs = {
  where: DescriptorWhereUniqueInput;
};


export type MutationCreateOneMethodArgs = {
  data: MethodCreateInput;
};


export type MutationUpdateOneMethodArgs = {
  data: MethodUpdateInput;
  where: MethodWhereUniqueInput;
};


export type MutationDeleteOneMethodArgs = {
  where: MethodWhereUniqueInput;
};


export type MutationDeleteManyModelArgs = {
  where?: Maybe<ModelWhereInput>;
};


export type MutationUploadModelArgs = {
  artifact: Scalars['Upload'];
  keywords?: Maybe<Scalars['String']>;
  property?: Maybe<PropertyCreateOrConnectWithoutOwnerInput>;
  regMetric?: Maybe<RegressionMetricCreateWithModel>;
  clsMetric?: Maybe<ClassificationMetricCreateWithModel>;
  descriptor?: Maybe<DescriptorCreateOrConnectWithoutOwnerInput>;
  method?: Maybe<MethodCreateOrConnectWithoutOwnerInput>;
  modelset?: Maybe<ModelsetCreateOrConnectWithoutOwnerInput>;
  deprecated?: Maybe<Scalars['Boolean']>;
  succeed?: Maybe<Scalars['Boolean']>;
  training_env?: Maybe<Scalars['Json']>;
  training_info?: Maybe<Scalars['Json']>;
};


export type MutationCreateOneModelsetArgs = {
  data: ModelsetCreateInput;
};


export type MutationUpdateOneModelsetArgs = {
  data: ModelsetUpdateInput;
  where: ModelsetWhereUniqueInput;
};


export type MutationDeleteOneModelsetArgs = {
  where: ModelsetWhereUniqueInput;
};


export type MutationCreateOnePropertyArgs = {
  data: PropertyCreateInput;
};


export type MutationUpdateOnePropertyArgs = {
  data: PropertyUpdateInput;
  where: PropertyWhereUniqueInput;
};


export type MutationDeleteOnePropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ApiVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiVersionQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'apiVersion'>
);

export type DbStatisticQueryVariables = Exact<{ [key: string]: never; }>;


export type DbStatisticQuery = (
  { __typename?: 'Query' }
  & { statistic: (
    { __typename?: 'DBStatistic' }
    & Pick<DbStatistic, 'all'>
  ) }
);


export const ApiVersionDocument = gql`
    query APIVersion {
  apiVersion
}
    `;

export function useApiVersionQuery(options: Omit<Urql.UseQueryArgs<ApiVersionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ApiVersionQuery>({ query: ApiVersionDocument, ...options });
};
export const DbStatisticDocument = gql`
    query DBStatistic {
  statistic {
    all
  }
}
    `;

export function useDbStatisticQuery(options: Omit<Urql.UseQueryArgs<DbStatisticQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DbStatisticQuery>({ query: DbStatisticDocument, ...options });
};