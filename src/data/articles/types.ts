export interface CustomArticleData {
  fromUnitId: string;
  toUnitId: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string[];
  quickAnswer: {
    text: string;
    formulaDisplay: string;
    subtext: string;
  };
  aboutSourceUnit: {
    title: string;
    text: string;
  };
  aboutTargetUnit: {
    title: string;
    text: string;
  };
  relationship: string;
  relationshipTitle?: string;
  relationshipItems: { label: string; value: string }[];
  formula: {
    text: string;
    math: string;
    subtext: string;
  };
  formulaTitle?: string;
  practicalTip?: {
    title?: string;
    text: string;
  };
  expertNote?: {
    title?: string;
    text: string;
  };
  examples: {
    title: string;
    items: {
      title: string;
      subtitle: string;
      steps: string[];
    }[];
  };
  table: {
    title: string;
    headers: string[];
    rows: { fromVal: string; toVal: string; extra: string }[];
  };
  applications: {
    title: string;
    items: { title: string; text: string }[];
  };
  pitfalls: {
    title: string;
    items: string[];
  };
  faqs: {
    question: string;
    answer: string;
    questionId?: string;
  }[];
  relatedList: { label: string; from: string; to: string }[];
  references: string[];
}
