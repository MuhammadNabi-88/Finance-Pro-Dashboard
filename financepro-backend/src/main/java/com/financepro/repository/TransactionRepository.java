package com.financepro.repository;
import com.financepro.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT COALESCE(SUM(t.betrag), 0) FROM Transaction t WHERE t.art = 'Einnahme'")
    BigDecimal sumEinnahmen();
    @Query("SELECT COALESCE(SUM(t.betrag), 0) FROM Transaction t WHERE t.art = 'Ausgabe'")
    BigDecimal sumAusgaben();
}