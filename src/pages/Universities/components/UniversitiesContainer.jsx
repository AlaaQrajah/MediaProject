import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUniversities } from "../../../features/universities/hooks/useUniversities";
import UniversitiesList from "./UniversitiesList";

export default function UniversitiesContainer() {
    const { data: universities = [], isLoading, error } = useUniversities();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

    const filteredUniversities = universities.filter((uni) =>
        (uni.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (uni.location || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        if (query) {
            setSearchParams({ q: query });
        } else {
            setSearchParams({});
        }
    };

    return (
        <UniversitiesList
            universities={filteredUniversities}
            isLoading={isLoading}
            error={error}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
        />
    );
}
