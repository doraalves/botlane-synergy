# Bot Synergy

🔗 **[botsynergy.vercel.app](https://botsynergy.vercel.app)**

Projeto full-stack para portfólio — ajuda jogadores de League of Legends a escolherem duos para bot lane em dois modos: **Jogar Sério** (meta/sinergia técnica) e **Se Divertir** (off-meta/combos insanos).

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Node.js + Express |
| Assets | Riot Games Data Dragon (CDN público) |

---

## Como rodar

```bash
# 1. Instalar dependências (raiz, backend e frontend)
cd botlane-synergy
npm install
cd backend && npm install
cd ../frontend && npm install

# 2. Subir tudo de uma vez (da pasta raiz)
cd ..
npm run dev
```

| Serviço | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3001 |

Para rodar separadamente:
```bash
# Terminal 1 — backend
cd backend && npm run dev

# Terminal 2 — frontend
cd frontend && npm run dev
```

---

## Estrutura do projeto

```
botlane-synergy/
├── package.json              ← runner raiz (concurrently)
│
├── backend/
│   ├── package.json
│   ├── server.js             ← servidor Express, rotas, lógica
│   └── data/
│       └── synergies.js      ← banco de dados em memória (JSON)
│
└── frontend/
    ├── vite.config.js        ← proxy /api → :3001
    ├── tailwind.config.js
    └── src/
        ├── App.jsx
        ├── services/
        │   └── api.js        ← chamadas HTTP para o backend
        └── components/
            ├── ChampionCard.jsx
            ├── DuoCard.jsx
            ├── MoodButton.jsx
            ├── LoadingSpinner.jsx
            └── TierLegend.jsx
```

---

## Endpoint da API

### `GET /api/duos?mood=serio`

Retorna 3 duos aleatórios baseados no mood.

**Parâmetros:**

| Parâmetro | Tipo | Valores aceitos |
|-----------|------|-----------------|
| `mood` | query string | `serio` \| `divertir` |

**Resposta de sucesso (`200`):**

```json
{
  "mood": "serio",
  "duos": [
    {
      "id": "serio-1",
      "champion1": { "name": "Caitlyn", "role": "ADC" },
      "champion2": { "name": "Morgana", "role": "SUP" },
      "synergy_title": "Prisão Infinita",
      "description": "Morgana prende com Dark Binding...",
      "tier": "S"
    }
  ]
}
```

**Resposta de erro (`400`):**

```json
{ "error": "mood must be \"serio\" or \"divertir\"" }
```

**Regra especial:** No modo `divertir`, o backend sempre garante pelo menos **1 duo tier S** entre os 3 retornados.

---

## Assets dos campeões

As imagens vêm direto do CDN público da Riot (Data Dragon), sem necessidade de chave de API:

```
https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{NomeCampeão}_0.jpg
```

Para funcionalidades avançadas (dados de partida, ranking, etc), basta adicionar sua chave no `.env`:

```env
RGAPI_KEY=RGAPI-xxxx-xxxx-xxxx
```

---

## Adicionando novos duos

Edite `backend/data/synergies.js` e adicione um objeto no array `serio` ou `divertir`:

```js
{
  id: "serio-16",                               // único, sem repetir
  champion1: { name: "Jinx",   role: "ADC" },  // nome exato do DDragon
  champion2: { name: "Thresh", role: "SUP" },
  synergy_title: "Nome do Combo",
  description: "Descrição da sinergia.",
  tier: "S",                                    // S | A | C | D | F
}
```

> **Atenção com nomes especiais do Data Dragon:**
> Alguns campeões têm nomes internos diferentes do display. Os overrides estão em `frontend/src/components/ChampionCard.jsx`:
> - `Kai'Sa` → `Kaisa`
> - `Wukong` → `MonkeyKing`
> - `Renata Glasc` → `Renata`
> - `LeBlanc` → `Leblanc`
