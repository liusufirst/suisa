import torch
from torch.distributions import multinomial
from d2l import torch as d2l

fair_probs = torch.ones(6) / 6



counts = multinomial.Multinomial(10, fair_probs).sample(torch.Size([500]))
cum_counts = counts.cumsum(dim=0)
estimates = cum_counts / cum_counts.sum(dim=1, keepdim=True)

d2l.set_figsize((6, 4.5))
for i in range(6):
    d2l.plt.plot(estimates[:, i].numpy(),
                 label=("P(die=" + str(i + 1) + ")"))
d2l.plt.axhline(y=0.16666667, color='black', linestyle='dashed')  # type: ignore
d2l.plt.gca().set_xlabel('Groups of experiments')
d2l.plt.gca().set_ylabel('Estimated probability')
d2l.plt.legend();
d2l.plt.show()