export type Message = {
  id: number;
  title: string;
  body: string;
  created_at: string;
};

export const MOCK_MESSAGES: Message[] = [
  {
    id: 1,
    title: "Olá mundo",
    body: "Primeira mensagem!",
    created_at: "2026-08-14T10:00:00Z",
  },
  {
    id: 2,
    title: "Mensagem incrível",
    body: "Essa mensagem é incrível!",
    created_at: "2026-08-14T11:30:00Z",
  },
  {
    id: 3,
    title: "Teste",
    body: "Eu <3 React",
    created_at: "2026-08-14T12:15:00Z",
  },
];
