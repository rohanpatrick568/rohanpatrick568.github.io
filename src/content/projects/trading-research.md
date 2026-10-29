---
title: Trading Systems Research
summary: Two years of teaching myself how algorithmic trading systems work, from reinforcement-learning agents to a C++ market simulator, including an honest look at why a model that shines in validation can fail on new data.
spec: ["Python + PyTorch", "Reinforcement learning (PPO, DQN)", "C++17 simulator", "Paper trading only"]
category: Machine learning
status: Ongoing research; paper trading only
period: 2025 – 2026
sortDate: 2026-05-29
role: Solo, self-directed
art: candlestick
links:
  - label: DeepScalper pipeline on GitHub
    url: https://github.com/rohanpatrick568/deepscalper_copilot
  - label: C++ market simulator on GitHub
    url: https://github.com/rohanpatrick568/hft
---

Markets are a good place to practice machine learning because the data is plentiful and the feedback is brutal. None of this is investment advice, and none of it trades real money: everything below ran on historical data or an Alpaca paper account.

## The path

1. **A first PPO agent (early 2025).** A reinforcement-learning agent built with Stable-Baselines3 that looks at the last 50 price bars and decides to buy or sell. I backtested it with Lumibot and compared it against an A2C agent.
2. **Strategy research (fall 2025).** I ported a rule-based strategy into Backtrader, then built a risk-aware version with volatility-based position sizing and a drawdown brake.
3. **A C++ market simulator (Dec 2025).** An event-driven engine that replays real trades tick by tick with a limit order book, randomized 100–500 µs latency, fill logic that only fills an order after it reaches the exchange, and live PnL. A logistic-regression signal runs inside the C++ hot path; I trained it in Python.
4. **A DeepScalper pipeline (May 2026).** An end-to-end system based on the DeepScalper paper: Colab notebooks fetch data, build features and train a DQN agent (short, flat or long), a GitHub Actions workflow publishes the weights, and a Lumibot strategy runs them on an Alpaca paper account, enforced in code, with a PyQt dashboard and a test suite.

## What the numbers said

I trained the DeepScalper agent on eight large US stocks. Validation looked spectacular: the best validation Sharpe ratio was between about 27 and 38 for every stock. On held-out test data, six of the eight had a negative Sharpe ratio, and only AAPL (5.5) and TSLA (1.8) passed my gate.

Validation numbers that good are a warning sign, not a win. The agent had learned the validation period, not the market. That result is the most useful thing this project taught me: build the test that can prove you wrong before you trust a backtest.

## What's next

Tighter walk-forward validation, simpler baselines to beat, and more realistic costs before any strategy earns more attention.
