package com.financepro.controller;
import com.financepro.model.Transaction;
import com.financepro.repository.TransactionRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/transaktionen")
public class TransactionController {
    private final TransactionRepository repo;
    public TransactionController(TransactionRepository repo){ this.repo = repo; }

    @GetMapping
    public List<Transaction> getAll(){ return repo.findAll(); }

    @GetMapping("/stats")
    public Map<String,Object> getStats(){
        Map<String,Object> m = new HashMap<>();
        var ein = repo.sumEinnahmen(); var aus = repo.sumAusgaben().abs();
        m.put("kontostand", 12450.75 + ein.doubleValue() - aus.doubleValue());
        m.put("einnahmen", ein); m.put("ausgaben", aus); m.put("anzahl", repo.count());
        return m;
    }

    @PostMapping
    public Transaction create(@RequestBody Transaction t){
        if(t.getDatum()==null) t.setDatum(LocalDate.now());
        if(t.getArt()==Transaction.Art.Ausgabe && t.getBetrag().doubleValue()>0) t.setBetrag(t.getBetrag().negate());
        return repo.save(t);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){ repo.deleteById(id); }
}
