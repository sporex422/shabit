package com.ezpz.shabit.info.repository;

import com.ezpz.shabit.info.entity.Vod;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.SQLException;
import java.util.List;

public interface VodRepository extends JpaRepository<Vod, Long> {

  Page<Vod> findByTitleIsLike(String name, Pageable pageable);

  Page<Vod> findByLength(int length, Pageable pageable);

  Page<Vod> findByCategoryCategoryId(Long categoryId, Pageable pageable);

  Page<Vod> findAll(Pageable pageable);

  Vod findByVideoId(String videoId);

  List<Vod> findByLengthAndCategoryCategoryId(int length, long category) throws SQLException;
}
